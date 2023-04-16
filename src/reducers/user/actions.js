import axios from 'axios'
import { namespace, FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './constants'

export const typeFormat = (type) => `${namespace}/${type}`

const asyncFetch = function* (dispatch) {
    try {
        const res = yield axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type: typeFormat(FETCH_USER_SUCCESS),
            payload: { info: res.data[Math.floor(Math.random() * 10)] }
        })
    } catch (error) {
        dispatch({
            type: typeFormat(FETCH_USER_ERROR),
            payload: { error }
        })
    }
}

export const fetchUser = () => ({
    type: typeFormat(FETCH_USER_LOADING),
    payload: asyncFetch
})