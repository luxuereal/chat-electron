import React from "react";
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

export default function App() {
  return(
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
  )
}

