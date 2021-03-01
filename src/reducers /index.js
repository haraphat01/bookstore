import books from './books'

import { combineReducers } from 'redux'
const rootReducer = combineReducers({ potato: potatoReducer, tomato: tomatoReducer })