import React from 'react';
import "./App.css";
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialog from './Components/Dialog/Dialog';
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='App-Content'>
          <Route path='/profile' Component={Profile} />
          <Route path='/dialog' Component={Dialog} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App 
