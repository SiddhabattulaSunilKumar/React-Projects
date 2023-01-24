const redux = require('redux');

const counterRedux = (state = {counter : 2}, action) => {

    if(action.type==='increment'){
        return {
            counter : state.counter + 1,
        };
    }
    else if(action.type==='decrement'){
        return {
            counter : state.counter - 1,
        };
    }

        return state

    
};

const store = redux.createStore(counterRedux);

const counterSubscriber = () => {
   const latestState =  store.getState();
   console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});