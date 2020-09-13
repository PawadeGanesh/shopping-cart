import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'

const appReducer = combineReducers({ cartReducer })

export default appReducer
