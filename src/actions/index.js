import { ADD, SUB } from './../constants'

export const add = () => ({ type: ADD })

export const sub = () => ({ type: SUB })

const asyncFetch = async (wait) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(wait)
        }, wait * 1000)
    })

export const addAsync = (wait) => ({
    type: ADD,
    payload: asyncFetch(wait)
})