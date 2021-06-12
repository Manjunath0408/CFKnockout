import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Login } from "./components/base/Login";
import { Signup } from "./components/base/Signup"
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

