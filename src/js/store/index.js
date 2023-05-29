
import {createStore, combineReducers , applyMiddleware} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import chatReducer from '../reducers/chats';

export default function initStore() {

  const middlewares = [
    thunkMiddleware
  ]

  const store = createStore(
    combineReducers({
      chats:chatReducer
    })
    ,applyMiddleware(...middlewares));

  return store;
}
