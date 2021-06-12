import React from 'react'
import '../Page1.css'
import {
    Link
  } from "react-router-dom";
export const Login = () => {
    return (
        <div className="Login">
            <div className="login-head"><p>Login</p></div>
            <div><input type="text" placeholder="Email/Username" required></input></div>        
            <div><input type="password" placeholder="Password" required></input></div>
            <div><button>Submit</button></div>
            <Link exact to="/signup">Sign Up</Link>
            <Link exact to="/forget">Forget</Link>
        </div>
    )
}
