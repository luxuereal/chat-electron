import React from "react";
import { Provider } from "react-redux";

import HomeView from "./views/Home";
import { 
  HashRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./views/login";
import Register from "./views/register";
import Settings from "./views/settings";
import ChatView from "./views/Chat";

import configureStore from "./store";

const store = configureStore()

export default function App() {
  return(
    <Provider store={store}>
      <Router>
        <Navbar/>
          <div className='content-wrapper'>
            <Routes>
                <Route path="/" element={<HomeView/>} exact="true"/>
                <Route path="/chat/:id" element={<ChatView/>} />
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
          </div>
      </Router>
    </Provider>
  )
}

