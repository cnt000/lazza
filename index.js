const BASE_MODEL_STRING = '{ "fields": [], "votes": [] }';
const INPUT_SELECTOR = '.inputs';
const BUTTON_SELECTOR = '.vote-button';
const RESULT_SELECTOR = '.result';
const PARTIAL_RESULT_SELECTOR = '.partial';
const TIMES_SELECTOR = '.times';
const REVIEW_SELECTOR = '.review';
const FINAL_RESULT_SELECTOR = '.final';
const SEND_BUTTON_SELECTOR = '#send-data';
const REMOVE_SELECTOR = '.remove';
const SESSION_NAME = 'lazza_';
const SESSION_NAME_REDUX = 'lazza_redux_';
const { createStore } = Redux;

const defaultState = {
  judging: {
    session: '',
    fields: [],
    votes: []
  }
};

const judging = {
    session: {},
    store: {},
    init: () => {
        const persistedState = localStorage.getItem(SESSION_NAME_REDUX) ? JSON.parse(localStorage.getItem(SESSION_NAME_REDUX)) : defaultState;
        store = createStore(judgingApp, persistedState);

        store.subscribe(()=>{
          localStorage.setItem(SESSION_NAME_REDUX, JSON.stringify(store.getState()));
          judging.loadVotesData();
          console.log(store.getState());
        });

        judging.loader(INPUT_SELECTOR, judging.loadFieldsData);
        judging.loadVotesData();
        console.log(store.getState());

        judging.watcher(INPUT_SELECTOR, 'change', judging.entryField);
        judging.watcher(BUTTON_SELECTOR, 'click', judging.vote);
        judging.watcher(SEND_BUTTON_SELECTOR, 'click', judging.sendToServer);
    },
    loadVotesData: () => {
      judging.loader(RESULT_SELECTOR, judging.loadResultData);
      judging.loader(TIMES_SELECTOR, judging.loadTimesData);

      judging.loader(REVIEW_SELECTOR, judging.loadReviewData);
      judging.watcher(REMOVE_SELECTOR, 'click', judging.removeVoteData);
      judging.loader(PARTIAL_RESULT_SELECTOR, judging.loadPartialResultData);
      judging.loader(FINAL_RESULT_SELECTOR, judging.loadFinalResultData);
    },
    loadResultData: (element) => {
      var votingSumId = element.dataset.id.replace( 'result', 'voting');
      element.innerText = judging.sumVotes(votingSumId);
    },
    sumVotes: (votingSumId) => {
      var sum = store.getState().judging.votes.reduce(function(prevVal, elem) {
          return (elem.id === votingSumId) ?
          parseFloat(prevVal,10) + parseFloat(elem.value,10) :
          prevVal;
      }, 0.0);
      return parseFloat(sum,10).toFixed(1);
    },
    loadTimesData: (element) => {
      var votingSumId = element.dataset.id.replace( 'times', 'voting');
      var sum = store.getState().judging.votes.filter(function(elem) {
          return (elem.id === votingSumId);
      });
      element.innerText = sum.length;
    },
    loadReviewData: (element) => {
      var reviewId = element.dataset.id.replace( 'review', 'voting');
      var badgesEls = document.createElement('div');
      element.innerHTML = '';
      var diopo = '';
      store.getState().judging.votes.forEach((elem) => {
          if(reviewId === elem.id) {
              diopo += '<div data-id="' + elem.id + '" data-time="' + elem.time + '">' +(elem.time+1) + ': ' + elem.value + ' <span class="remove">X<span></div>';
          }
      });
      badgesEls.innerHTML = diopo;
      element.appendChild(badgesEls);
    },
    loadFinalResultData: (element) => {
      var sum = store.getState().judging.votes.reduce(function(prevVal, elem) {
          return (elem.id.indexOf('A') > -1) ? parseFloat(prevVal,10) + parseFloat(elem.value,10) : prevVal
      }, 0.0);
      element.innerText = sum;
    },
    loadPartialResultData: (element) => {
      var sum = store.getState().judging.votes.reduce(function(prevVal, elem) {
        return (elem.id.indexOf('A') > -1) ? parseFloat(prevVal,10) + parseFloat(elem.value,10) : prevVal
      }, 0.0);
      element.innerText = sum;
    },
    loadFieldsData: (element) => {
      store.getState().judging.fields.forEach((field)=>{
        if(field.id === element.dataset.id) {
          if(field.value && element.type === 'checkbox') {
            element.checked = true;
          } else {
            element.value = field.value;
          }
        }
      });
    },
    removeVoteData: (element) => {
      store.dispatch(removeVote(element.parentElement.dataset.id, null, element.parentElement.dataset.time));
    },
    entryField: (element) => {
      var value = (element.type === 'checkbox') ? element.checked : element.value;
      store.dispatch(entryField(element.dataset.id, value));
    },
    vote: (element) => {
      if((element.className.indexOf('single') > -1)) {
        store.dispatch(oneshotVote(element.dataset.id, element.dataset.value, 0));
      } else {
        store.dispatch(vote(element.dataset.id, element.dataset.value, 0));
      }
    },
    sendToServer: (element) => {
      if(confirm('Are you sure? DEFINITIVE')) {
          var dt = new Date();
          var dateFile = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate();
          var identifier = 'lazza_data_'+dateFile + '_' + (Math.random()*1000000).toFixed(2);
          var session = store.getState();
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

function removeVote(id, value, time) {
  return {
    type: 'REMOVE_VOTE',
    id: id,
    value: value,
    time: time
  };
}

function entryField(id, value) {
  return {
    type: 'ENTRY_FIELD',
    id: id,
    value: value
  };
}

function vote(id, value, time) {
  return {
    type: 'VOTE',
    id: id,
    value: value,
    time: time
  };
}

function oneshotVote(id, value, time) {
  return {
    type: 'ONESHOT_VOTE',
    id: id,
    value: value,
    time: time
  };
}

function judgingApp(state, action) {
  switch (action.type) {
    case 'VOTE':
      var newState = Object.assign({}, state);
      var timesArr = newState.judging.votes.filter((obj) => {
        return (obj.id === action.id);
      });
      newState.judging.votes.push({
        id: action.id,
        value: action.value,
        time: timesArr.length++
      });
      return newState;

    case 'ONESHOT_VOTE':
      var newState = Object.assign({}, state);
      var existent = newState.judging.votes.filter((obj) => {
          return (obj.id === action.id)
      });
      if(existent.length === 0) {
          newState.judging.votes.push({id: action.id, value: action.value, time: 0});
      }  else {
          newState.judging.votes.forEach((obj) => {
              if(obj.id === action.id) {
                  obj.value = action.value;
              }
          });
      }
      return newState;

    case 'ENTRY_FIELD':
        var newState = Object.assign({}, state);
        var existent = newState.judging.fields.filter((obj) => {
            return (obj.id === action.id)
        });
        if(existent.length === 0) {
            newState.judging.fields.push({id: action.id, value: action.value});
        }  else {
            newState.judging.fields.forEach((obj) => {
                if(obj.id === action.id) {
                    obj.value = action.value;
                }
            });
        }
        return newState;

    case 'REMOVE_VOTE':
        var newState = Object.assign({}, state);
        var filteredVotes = newState.judging.votes.filter((element) => {
          return (element.id != action.id || element.time != action.time)
        });
        newState.judging.votes = filteredVotes;
        return newState;

    default:
      return state;
  }
}
