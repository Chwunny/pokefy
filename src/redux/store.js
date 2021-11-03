import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import statusReducer from './statusReducer'
import tokenReducer from './tokenReducer'

const rootReducer = combineReducers({
    status: statusReducer,
    token: tokenReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)