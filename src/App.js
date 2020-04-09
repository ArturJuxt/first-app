import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialog from './Components/Dialog/Dialog';
import Todo from './Components/Todo/Todo';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="app-content">
          <Switch>
            <Route
              path="/profile"
              render={() => <Profile posts={props.appState.posts} />}
            />
            <Route
              path="/dialog"
              render={() => (
                <Dialog
                  store={props.store}
                  users={props.appState.users}
                  messages={props.appState.messages}
                />
              )}
            />
          </Switch>
        </div>
        <Todo />
      </div>
    </BrowserRouter>
  );
}

export default App;
