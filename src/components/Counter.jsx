import React, { useContext } from 'react';
import { Context } from '../Context'
import { add, addAsync } from '../reducers/counter/actions'

const Counter = () => {
    let { state, dispatch } = useContext(Context)
    return (
        <div>
            <h4>Counter组件</h4>
            <p>{state.counter.count}</p>
            <button onClick={() => dispatch(add())}>同步+</button>
            <button onClick={() => dispatch(addAsync(2))}>异步+</button>
        </div>
    );
};

export default Counter;