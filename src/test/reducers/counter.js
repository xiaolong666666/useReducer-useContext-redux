import { ADD, SUB } from './../constants'

export const counter = (state, action) => {
    switch (action.type) {
        case ADD: return { count: state.count + 1 }
        case SUB: return { count: state.count - 1 }
        default: throw new Error()
    }
}