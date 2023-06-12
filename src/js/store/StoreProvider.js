import React from "react";
import  configureStore  from "../store";
import { Provider } from "react-redux";

const store = configureStore()

export default function StoreProvider({children}){

  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}