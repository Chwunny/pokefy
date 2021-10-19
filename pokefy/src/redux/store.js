import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import statusReducer from './statusReducer'

const rootReducer = combineReducers({
    status: statusReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)