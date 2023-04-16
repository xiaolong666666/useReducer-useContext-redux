import { ADD, SUB } from './constants'
import { typeFormat } from './actions'

const counter = (state, action) => {
    const { type, payload = 1 } = action
    switch (type) {
        case typeFormat(ADD): return {
            count: state.count + payload
        }
        case typeFormat(SUB): return { count: state.count - 1 }
        default: throw new Error("发生错误")
    }
}

export default counter