import React, { useContext } from 'react';
import { Context } from './../Context'
import { addAsync } from './../actions'

const GrondChild = () => {
    let { state, dispatch } = useContext(Context)
    return (
        <div>
            <h4>GrondChild组件</h4>
            <p>{state.counter.count}</p>
            <button onClick={() => dispatch(addAsync())}>异步+</button>
        </div>
    );
};

export default GrondChild;