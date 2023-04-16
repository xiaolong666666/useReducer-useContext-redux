import { namespace, ADD, SUB } from './constants'

export const typeFormat = (type) => `${namespace}/${type}`

export const add = () => ({ type: typeFormat(ADD) })

export const sub = () => ({ type: typeFormat(SUB) })

const asyncFetch = async (wait) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(wait)
        }, wait * 1000)
    })

export const addAsync = (wait) => ({
    type: typeFormat(ADD),
    payload: asyncFetch(wait)
})