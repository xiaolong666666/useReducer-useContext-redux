import React, { useReducer } from 'react';
import { Context } from './Context'
import { rootReducer, initialState } from './reducers'
import { middleware } from './reducers/middleware'
import Child from './components/Child.jsx'

const App = () => {
  let [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <>
      <h2>App组件</h2>
      <Context.Provider value={{ state, dispatch: middleware(dispatch) }}>
        <Child />
      </Context.Provider>
    </>
  );
};

export default App