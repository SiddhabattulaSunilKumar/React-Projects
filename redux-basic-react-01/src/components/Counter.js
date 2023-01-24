import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type : 'INCREMENT'});
    }
    const decrementHandler = () => {
        dispatch({type : 'DECREMENT'});
    }
    const toggleCounterHandler = () =>{}
    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>INCREMENT</button>
                <button onClick={decrementHandler}>DECREMENT</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </div>
    );
};

export default Counter;