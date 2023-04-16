import { FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './constants'
import { typeFormat } from './actions'

const user = (state, action) => {
    switch(action.type){
        case typeFormat(FETCH_USER_LOADING):
            return {
                isLoading: true,
                info: null,
                error: null
            }
        case typeFormat(FETCH_USER_SUCCESS):
            return {
                isLoading: false,
                info: action.payload.info,
                error: null
            }
        case typeFormat(FETCH_USER_ERROR):
            return {
                isLoading: false,
                info: null,
                error: action.payload.error
            }
        default: throw new Error("发生错误")
    }
}

export default user