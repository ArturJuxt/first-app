import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/State';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App appState={state} />, document.getElementById('root'));
