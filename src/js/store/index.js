
import {createStore, combineReducers , applyMiddleware} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import chatReducer from '../reducers/chats';
import authReducer from '../reducers/auth';

export default function initStore() {

  const middlewares = [
    thunkMiddleware
  ]

  const store = createStore(
    combineReducers({
      chats:chatReducer,
      auth: authReducer
    })
    ,applyMiddleware(...middlewares));

  return store;
}
