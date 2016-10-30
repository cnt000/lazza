const BASE_MODEL_STRING = '{ "fields": [], "votes": [] }';
const INPUT_SELECTOR = '.inputs';
const BUTTON_SELECTOR = '.vote-button';
const RESULT_SELECTOR = '.result';
const PARTIAL_RESULT_SELECTOR = '.partial';
const TIMES_SELECTOR = '.times';
const REVIEW_SELECTOR = '.review';
const FINAL_RESULT_SELECTOR = '.final';
const SEND_BUTTON_SELECTOR = '#send-data';
const SESSION_NAME = 'lazza_';

const judging = {
    session: {},
    init: () => {
        judging.initializeSession();
        judging._saveSessionToLocalStorage();

        judging.loadVotesData();

        judging.watcher(INPUT_SELECTOR, 'change', judging.entryField);
        judging.watcher(BUTTON_SELECTOR, 'click', judging.vote);
        judging.watcher(SEND_BUTTON_SELECTOR, 'click', judging.sendToServer);
    },
    initializeSession: () => {
        let sessionString = localStorage.getItem(SESSION_NAME) || '';
        let isNew = (sessionString === '');
        judging.session = JSON.parse((isNew) ? BASE_MODEL_STRING : sessionString);
    },
    loadVotesData: () => {
      judging.loader(INPUT_SELECTOR, judging.loadFieldsData);
      judging.loader(RESULT_SELECTOR, judging.loadResultData);
      judging.loader(TIMES_SELECTOR, judging.loadTimesData);

      judging.loader(REVIEW_SELECTOR, judging.loadReviewData);
      judging.watchRemoveReview();
      judging.loader(PARTIAL_RESULT_SELECTOR, judging.loadPartialResultData);
      judging.loader(FINAL_RESULT_SELECTOR, judging.loadFinalResultData);
    },
    loadResultData: (element) => {
      var votingSumId = element.dataset.id.replace( 'result', 'voting');
      var sum = judging.session.votes.reduce(function(prevVal, elem) {
          return (elem.from === votingSumId) ?
          parseFloat(prevVal,10) + parseFloat(elem.vote,10) :
          prevVal;
      }, 0.0);
      element.innerText = parseFloat(sum,10).toFixed(1);
    },
    loadTimesData: (element) => {
      var votingSumId = element.dataset.id.replace( 'times', 'voting');
      var sum = judging.session.votes.filter(function(elem) {
          return (elem.from === votingSumId);
      });
      element.innerText = sum.length;
    },
    loadReviewData: (element) => {
      var reviewId = element.dataset.id.replace( 'review', 'voting');
      var badgesEls = document.createElement('div');
      element.innerHTML = '';
      judging.session.votes.forEach((elem) => {
          if(reviewId === elem.from) {
              var badge = badgesEls.appendChild(document.createElement('span'));
              badge.innerHTML += '<div data-id="' + elem.from + '" data-time="' + elem.time + '">' +(elem.time+1) + ': ' + elem.vote + '</b> <span class="remove">Remove<span><br/>';
          }
      });
      element.appendChild(badgesEls);
    },
    watchRemoveReview: () => {
      var removeEls = document.querySelectorAll('.remove');
      removeEls.forEach((removeEl) => {
        removeEl.addEventListener('click', () => {
            console.log('Rimuovo', removeEl.parentElement.dataset.id, removeEl.parentElement.dataset.time);
            judging.saveData('remove', removeEl.parentElement.dataset.id, null, removeEl.parentElement.dataset.time);
            judging.loadVotesData();
        }, false );
      });
    },
    loadFinalResultData: (element) => {
      var sum = judging.session.votes.reduce(function(prevVal, elem) {
          return (elem.from.indexOf('A') > -1) ? parseFloat(prevVal,10) + parseFloat(elem.vote,10) : prevVal
      }, 0.0);
      element.innerText = sum;
    },
    loadPartialResultData: (element) => {
      var sum = judging.session.votes.reduce(function(prevVal, elem) {
        return (elem.from.indexOf('A') > -1) ? parseFloat(prevVal,10) + parseFloat(elem.vote,10) : prevVal
      }, 0.0);
      element.innerText = sum;
    },
    entryField: (element) => {
      judging.saveData('input', element.dataset.id, element.value, 0);
    },
    vote: (element) => {
      var type = (element.className.indexOf('single') > -1) ? 'single' : 'vote' ;
      judging.saveData(type, element.dataset.id, element.dataset.value, 0);
      judging.loadVotesData();
    },
    loadFieldsData: (element) => {
        judging.session.fields.forEach((field)=>{
            if(field.from === element.dataset.id) {
              element.value = field.data;
            }
        });
    },
    sendToServer: (element) => {
      if(confirm('Are you sure? DEFINITIVE')) {
          var dt = new Date();
          var dateFile = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate();
          var identifier = 'lazza_data_'+dateFile + '_' + (Math.random()*1000000).toFixed(2);
          var session = judging.session;
          var payload = { identifier, session };
          // http://localhost/lazza.php/{$table}/{$id}
          fetchival('lazza.php/tournament/' + identifier)
            .post({ session: payload })
            .then(() => {
              alert('dati inviati al server'+identifier);
              localStorage.setItem(SESSION_NAME, '');
            })
            .catch(err => {
              console.log(err)
            });
            console.log(payload);
      }
    },
    _saveSessionToLocalStorage: () => {
        localStorage.setItem(SESSION_NAME, JSON.stringify(judging.session));
    },
    saveData: (type, id, value, time) => {
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
            case 'single':
              var sameIdVote = judging.session.votes.filter((obj) => {
                return (obj.from === id);
              });
              if(sameIdVote.length === 0) {
                judging.session.votes.push({from: id, vote: value, time: 0});
              }  else {
                sameIdVote.forEach((obj) => {
                  if(obj.from === id && obj.time === 0) {
                    obj.vote = value;
                  }
                });
              }
            break;
            case 'remove':
              var filteredVotes = judging.session.votes.filter((obj) => {
                if((obj.from == id && obj.time == time+"")) {
                  return false;
                } else {
                  return true;
                }
              });
              judging.session.votes = filteredVotes;
            break;
            default:
            return;
        }
        judging._saveSessionToLocalStorage();
    },
    watcher: (selector, domEvent, callback) => {
      var selectedElements = document.querySelectorAll(selector);
      selectedElements.forEach((elem) => {
        elem.addEventListener(domEvent, () => {
          callback(elem);
        }, false );
      });
    },
    loader: (selector, callback) => {
      var selectedElements = document.querySelectorAll(selector);
      selectedElements.forEach((elem) => {
        callback(elem);
      });
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
    if(accordionPanel.parentElement.className.indexOf('open') > -1) {
        accordionPanel.parentElement.className = '' ;
    } else {
        accordionPanel.parentElement.className = 'open';
    }
}
