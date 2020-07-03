import { ADD, SUB } from './../actions'

export const counter = (state, action) => {
    switch (action.type) {
        case ADD: return { count: state.count + 1 }
        case SUB: return { count: state.count - 1 }
        default: throw new Error("发生错误")
    }
}