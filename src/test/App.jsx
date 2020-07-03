import React, { useReducer } from 'react';
import { CounterContext } from './CounterContext.js'
import Child from './Child'
import { rootReducer } from './reducers'
import { add } from './actions/counter.js'

const initialState = {
    counter: { count: 0 }
}

const App = () => {
    let [state, dispatch] = useReducer(rootReducer,initialState)
    return (
        <div>
            <h3>App组件</h3>
            <p>{state.counter.count}</p>
            <button onClick={() => dispatch(add())}>+</button>
            <CounterContext.Provider value={{state,dispatch}}>
                <Child />
            </CounterContext.Provider>
        </div>
    );
};

export default App;