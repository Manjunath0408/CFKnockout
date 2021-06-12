import React from 'react'
import '../Page1.css'
import {
    Link
  } from "react-router-dom";
export const SignUp = () => {
    return (
        <div className="Login">
            <div className="login-head"><p>Sign Up</p></div>
            <div><input type="text" placeholder="Email/Username" required></input></div>        
            <div><input type="password" placeholder="Password" required></input></div>
            <div><input type="password" placeholder="Confirm Password" required></input></div>
            <div><button>Submit</button></div>
            <Link exact to="/login">Login</Link>
        </div>
    )
}
