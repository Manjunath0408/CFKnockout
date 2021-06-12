import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Header } from "./components/base/Header";
import { Login } from "./components/base/Login"
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

