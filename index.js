const BASE_MODEL_STRING = '{ "fields": [], "votes": [] }';
const INPUT_SELECTOR = 'input[type=text]';
const BUTTON_SELECTOR = '.vote-button';
const RESULT_SELECTOR = '.result';
const TIMES_SELECTOR = '.times';
const REVIEW_SELECTOR = '.review';
const SEND_BUTTON_SELECTOR = '#send-data';
const SESSION_NAME = 'lazza_';

const judging = {
    session: {},
    init: () => {
        judging.initializeSession();
        judging.saveSessionToLocalStorage();
        judging.loadFieldsData();
        judging.loadVotesData();
        judging.watchFieldsInputs();
        judging.watchVotesButtons();
        judging.watchSendDataToServer();
    },
    initializeSession: () => {
        let sessionString = localStorage.getItem(SESSION_NAME) || '';
        let isNew = (sessionString === '');
        if(isNew) {
            sessionString = BASE_MODEL_STRING;
        }
        judging.session = JSON.parse(sessionString);
    },
    saveSessionToLocalStorage: () => {
        localStorage.setItem(SESSION_NAME, JSON.stringify(judging.session));
    },
    loadFieldsData: () => {
        judging.session.fields.forEach((field)=>{
            var inputEl = document.querySelector('input[data-id='+field.from+']');
            inputEl.value = field.data;
        });
        judging.log('* ------ loadVotesData ----- *');
    },
    loadVotesData: () => {
        var resultEls = document.querySelectorAll(RESULT_SELECTOR);
        resultEls.forEach((result)=>{
            var votingSumId = result.dataset.id.replace( 'result', 'voting');
            var sum = judging.session.votes.reduce(function(prevVal, elem) {
                return (elem.from === votingSumId) ?
                parseFloat(prevVal,10) + parseFloat(elem.vote,10) :
                prevVal;
            }, 0.0);
            result.innerText = parseFloat(sum,10).toFixed(1);
        });
        var resultEls = document.querySelectorAll(TIMES_SELECTOR);
        resultEls.forEach((result)=>{
            var votingSumId = result.dataset.id.replace( 'times', 'voting');
            var sum = judging.session.votes.filter(function(elem) {
                return (elem.from === votingSumId);
            });
            result.innerText = sum.length;
        });
        var reviewEls = document.querySelectorAll(REVIEW_SELECTOR);
        reviewEls.forEach((reviewEl) => {
            var reviewId = reviewEl.dataset.id.replace( 'review', 'voting');
            reviewEl.innerHTML = '';
            var badgesEls = document.createElement('div');
            judging.session.votes.forEach((elem) => {
                if(reviewId === elem.from) {
                    var badge = badgesEls.appendChild(document.createElement('span'));
                    badge.innerHTML += elem.time+1 + ': ' + elem.vote + '</b><br/>';
                }
            });
            reviewEl.appendChild(badgesEls);
        });

        judging.log('* ------ loadVotesData ----- *');
    },
    watchFieldsInputs: () => {
        var inputs = document.querySelectorAll(INPUT_SELECTOR);
        inputs.forEach( (inp)=> {
            inp.addEventListener('change', () => {
                judging.saveData('input', inp.dataset.id, inp.value);
            }, false );
        });
    },
    watchVotesButtons: () => {
        var buttons = document.querySelectorAll(BUTTON_SELECTOR);
        buttons.forEach( (but)=> {
            but.addEventListener('click', () => {
                judging.saveData('vote', but.dataset.id, but.dataset.value, true);
                judging.loadVotesData();
            }, false );
        });
    },
    watchSendDataToServer: () => {
        var sendButton = document.querySelector(SEND_BUTTON_SELECTOR);
        sendButton.addEventListener('click', () => {
            if(confirm('Are you sure? DEFINITIVE')) {
                //CALL AJAX API TO SAVE session
                // ajax --> lazza.php (lazza_data_(random)this.session)
                var dt = new Date();
                var dateFile = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate();
                var identifier = 'lazza_data_'+dateFile + '_' + (Math.random()*1000000).toFixed(2);
                var session = this.session;
                var payload = { identifier, session };
                console.log(payload);
                alert('dati inviati al server'+identifier);
                localStorage.setItem(SESSION_NAME, '');
            }
        }, false );
    },
    saveData: (type, id, value) => {
        switch(type) {
            case 'input':
            var existent = judging.session.fields.filter(function(obj) {
                return (obj.from === id)
            });
            if(existent.length === 0) {
                judging.session.fields.push({from: id, data: value});
            }  else {
                judging.session.fields.map((obj) => {
                    if(obj.from === id) {
                        obj.data = value;
                    }
                });
            }
            break;
            case 'vote':
            var timesArr = judging.session.votes.filter((obj) => {
              return (obj.from === id);
            });
            judging.session.votes.push({from: id, vote: value, time: timesArr.length++});
            break;
            default:
            return;
        }
        judging.saveSessionToLocalStorage();
    },
    saveSessionToLocalStorage: () => {
        localStorage.setItem(SESSION_NAME, JSON.stringify(judging.session));
    },
    log(msg) {
        console.log(msg);
        console.log(judging.session);
        console.log(' * **- -------------------------- -** *');
    }
}

judging.init();

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

togglePanel(2);
