export const combineReducers = (reducer) =>
    (state, action) => {
        const { type } = action
        const [currentNameSpace] = type.split('/')
        return {
            ...state,
            [currentNameSpace]: reducer[currentNameSpace](state[currentNameSpace], action)
        }
    }