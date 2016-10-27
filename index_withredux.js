
const counter = (state = 0, action) => {
  switch(action.type) {
   case 'INCREMENT':
    return state + action.data.value;
    case 'DECREMENT':
     return state - action.data.value;
    default:
    return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  console.log(store.getState());
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
   store.dispatch({ type: 'INCREMENT', value: 0.25 })
});
