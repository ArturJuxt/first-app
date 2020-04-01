import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialog from './Components/Dialog/Dialog';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App(props) {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className='app-content'>
          <Switch>
            <Route path="/profile"
              render={() => <Profile posts={props.appState.posts} />} />
            <Route path="/dialog"
              render={() => <Dialog users={props.appState.users} messages={props.appState.messages} />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App 
