/*
Index.js code s the entry point of  React application using 
Redux for state management and React Router for navigation
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import Router from './Router'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router /> {
      /* Render the Router component instead of App */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
