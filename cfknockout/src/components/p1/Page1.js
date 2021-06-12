import React from 'react'
import './Page1.css'
import { Signup } from './Signup';
import { Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const Page1 = () => {
    return (
        <div className="Login">
            <div className="login-head"><p>Log In</p></div>
            <div><input type="text" placeholder="Email/Username" required></input></div>        
            <div><input type="password" placeholder="Password" required></input></div>
            <div><button>Submit</button></div>
        </div>
    )
}
