import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialog from './Components/Dialog/Dialog';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className='app-content'>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dialog">
              <Dialog />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App 
