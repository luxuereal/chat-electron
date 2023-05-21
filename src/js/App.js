import React from "react";
import HomeView from "./views/Home";
import { 
  HashRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";

export default function App() {
  return(
    <Router>
      <Navbar/>
          <div className='content-wrapper'>
        <Routes>
            <Route path="/settings" element={<HomeView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/register" element={<HomeView/>}/>
            <Route path="/" element={<HomeView/>}/>
        </Routes>
          </div>
    </Router>
  )
}

function LoginView() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}