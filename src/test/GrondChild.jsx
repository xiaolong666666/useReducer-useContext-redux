import React, { useContext } from 'react';
import { CounterContext } from './CounterContext.js'
import { add } from './actions/counter.js'
const GrondChild = () => {
    let { state, dispatch } = useContext(CounterContext)
    return (
        <div>
            <h3>GrondChild组件</h3>
            <p>{state.counter.count}</p>
            <button onClick={() => dispatch(add())}>+</button>
        </div>
    );
};

export default GrondChild;