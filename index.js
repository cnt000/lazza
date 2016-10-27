const BASE_MODEL_STRING = '{ "fields": [] }';
const INPUT_SELECTOR = 'input[type=text]';
const BUTTON_SELECTOR = '.vote-button';
const SEND_BUTTON_SELECTOR = '#send-data';
const SESSION_NAME = 'lazza_';

class JudgingBattle {
  constructor() {
    var session;
    var sessionString = localStorage.getItem(SESSION_NAME);
    this.init(sessionString);
    this.watchInputs();
  }
  init(sessionString) {
    if(sessionString===null) {
      this.session = JSON.parse(BASE_MODEL_STRING);
      this.saveSessionToLocalStorage(this.session);
    } else {
      this.session = JSON.parse(sessionString);
      this.loadData();
    }
  }
  saveSessionToLocalStorage(session) {
    localStorage.setItem(SESSION_NAME, JSON.stringify(session));
  }
  watchInputs() {
    this.watchTextInputs();
    this.watchButtons();
    this.watchSendDataToServer();
  }
  watchTextInputs() {
    var inputs = document.querySelectorAll(INPUT_SELECTOR);
    inputs.forEach( (inp)=> {
        inp.addEventListener('change', () => {
          this.saveData(inp.dataset.id, inp.value);
          this.log(inp.dataset.id +" -> "+ inp.value);
        }, false );
    });
  }
  watchButtons() {
    var buttons = document.querySelectorAll(BUTTON_SELECTOR);
    buttons.forEach( (but)=> {
        but.addEventListener('click', () => {
          // store.dispatch({ type: 'INCREMENT', data: { id: but.dataset.id, value: but.dataset.value }});
          this.saveData(but.dataset.id, but.dataset.value, true);
          this.log(but.dataset.id +" -> "+ but.dataset.value +" -> "+ true);
          this.updateResult(but.dataset.id, but.dataset.value);
        }, false );
    });
  }
  watchSendDataToServer() {
    var sendButton = document.querySelector(SEND_BUTTON_SELECTOR);
    sendButton.addEventListener('click', () => {
          if(confirm('Are you sure? DEFINITIVE')) {
            //CALL AJAX API TO SAVE session
            // ajax --> lazza.php (lazza_data_(random)this.session)
            var dt = new Date();
            var dateFile = dt.getFullYear() + "_" + (dt.getMonth() + 1) + "_" + dt.getDate();
            var identifier = "lazza_data_"+dateFile + "_" + (Math.random()*1000000).toFixed(2);
            var session = this.session;
            var payload = { identifier, session };
            console.log(payload);
            alert('dati inviati al server'+identifier);
          }
        }, false );
  }
  updateResult(id, value) {
    var selector = '[data-id='+id.replace('voting', 'result')+']';
    var result = document.querySelector(selector);
    var currVal = result.innerText;
    var nextVal = parseFloat(value,10) + parseFloat(currVal, 10);
    result.innerText = nextVal.toFixed(1);
  }
  loadData() {
    this.session.fields.forEach((d)=>{
      var fromEl = document.querySelector('input[data-id='+d.from+']');
      if(fromEl != null) {
        fromEl.value = d.data;
      } else {
        var inputEl = document.querySelector('[data-id='+d.from.replace('voting', 'result')+']');
        inputEl.innerText = parseFloat(d.data,10).toFixed(1);
      }
    });
  }
  saveData(from, data, isNum=false) {
    var session = this.session;
    var currentData = session.fields.find(function(obj, index) {
      if(obj.from===from) {
        return true;
      }
    });
    if(typeof currentData == 'undefined') {
      session.fields.push({from: from, data: data, time: 0});
    }  else {
      session.fields.map((obj) => {
        if(obj.from===from) {
          obj.data = (isNum) ? parseFloat(currentData.data, 10)+parseFloat(data) : data;
          obj.time = obj.time+1;
        }
      });
    }
    this.saveSessionToLocalStorage(session);
  }
  log(msg) {
    console.log(msg);
    console.log(this.session);
    console.log(" * **- -------------------------- -** *");
  }

}

var judging = new JudgingBattle();

document.querySelectorAll('h2').forEach((d)=>{
  d.addEventListener('click', function() {
    togglePanel(this.dataset.accordionId);
  });
});

const togglePanel = (id) => {
  var accordionPanel = document.querySelector('div[data-accordion-id="'+id+'"]');
  if(accordionPanel.className.indexOf('open') > -1) {
    accordionPanel.className = 'accordionBox' ;
  } else {
    accordionPanel.className = 'accordionBox open';
  }
}
