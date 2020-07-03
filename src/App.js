import React, { useReducer } from 'react';
import { Context } from './Context'
import Child from './components/Child.jsx'
import { rootReducer } from './reducers'
import { add } from './actions'

const initialState = {
  counter: { count: 0 }
}

const isPromise = (obj) => {
  return (!!obj && (typeof obj ==="object" || typeof obj === "function") && typeof obj.then ==="function" )
}

const App = () => {
  let [state, dispatch] = useReducer(rootReducer,initialState)

  const thunk = (dispatch) => {
    return (action) => {
      if(isPromise(action.payload)){
        action.payload.then(v=>{
          dispatch({ type: action.type, payload: v })
        })
      }else{
        dispatch({ type: action.type })
      }
    }
  }

  return (
    <div>
      <h2>App组件</h2>
      <p>{state.counter.count}</p>
      <button onClick={() => dispatch(add())}>同步+</button>
      <Context.Provider value={{state,dispatch: thunk(dispatch)}}>
        <Child />
      </Context.Provider>
    </div>
  );
};

export default App;