import { ADD, SUB } from './../constants'

export const add = () => {
    return {
        type: ADD
    }
}

export const sub = () => {
    return {
        type: SUB
    }
}

const asyncFetch = async (data) => {
    console.log(data)
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(data)
            console.log(data)
        },2000)
    })
}

export const addAsync = () => {
    return {
        type: ADD,
        payload: asyncFetch(new Date().getTime())
    }
}