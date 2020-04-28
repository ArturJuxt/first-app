import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialog from './Components/Dialog/Dialog';
import Todo from './Components/Todo/Todo';
import Car from './Components/Car/Car';
import Koktel from './Components/Koktel/Koktel';
import TodoApp from './Components/useState/TodoApp';
import News from './Components/News/News';
import reducer from './Reducer';

const store = createStore(reducer);

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <div className="main-content">
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
                <Route path="/news" render={() => <News />} />
              </Switch>
            </div>
          </div>

          <div className="main-content-2">
            <Todo />
            <Car />
            <Koktel />
            <TodoApp />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
