import React, { useEffect } from "react";
import { Provider} from "react-redux";

import HomeView from "./views/Home";
import { 
  HashRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import WelcomeView from "./views/Welcome";
import Settings from "./views/settings";
import ChatView from "./views/Chat";

import configureStore from "./store";
import { listenToAuthChanges } from "./actions/auth";

const store = configureStore()


export default function App() {

 
  useEffect(()=>{
    store.dispatch(listenToAuthChanges())
  },[])


  return(
    <Provider store={store}>
      <Router>
        <Navbar/>
          <div className='content-wrapper'>
            <Routes>
                <Route path="/" element={<WelcomeView/>} exact={true}/>
                <Route path="/home" element={<HomeView/>} />
                <Route path="/chat/:id" element={<ChatView/>} />
                <Route path="/settings" element={<Settings/>}/>
                
            </Routes>
          </div>
      </Router>
    </Provider>
  )
}

