const redux = require('redux');

const counterRedux = (state = {counter : 0}, action) => {

    return {
        counter : state.counter + 1
    };
};

const store = redux.createStore(counterRedux);

const counterSubscriber = () => {
   const latestState =  store.getState();
   console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});