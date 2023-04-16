import { combineReducers } from './combineReducers'

const context = require.context("./", true)
const reducerPaths = context
    .keys()
    .filter(item => item.includes('index.js') && item !== './index.js')
const keys = reducerPaths.map(path => path.split('/')[1])
const reducerFiles = reducerPaths.map(path => context(path).default)

const statePaths = context
    .keys()
    .filter(item => item.includes('constants.js'))
const stateFiles = statePaths.map(path => context(path).default)

const reducer = {}
keys.forEach((key, index) => {
    reducer[key] = reducerFiles[index]
})

export const initialState = {}
keys.forEach((key, index) => {
    initialState[key] = stateFiles[index]
})

export const rootReducer = combineReducers(reducer)
