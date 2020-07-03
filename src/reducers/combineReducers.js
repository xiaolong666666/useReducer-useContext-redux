export const combineReducers = (reducer) => {
    return (state,action) => {
        const newState = {}
        Object.keys(reducer).forEach(key=>{
            newState[key] = reducer[key](state[key],action)
        })
        return newState
    } 
}