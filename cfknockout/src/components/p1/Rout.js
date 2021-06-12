import React from 'react'
import { Login } from '../base/Login'
import { Forget } from './Forget'
import { Sign } from './Sign'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const Rout = () => {
    return (
        <Router>
            <Link exact tp="/login">Login</Link>
            <Link exact to="/signup">Sign Up</Link>
            <Link exact to="/forget">Forget</Link>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path = "/signup">
                    <Sign/>
                </Route>
                <Route exact path = "/forget">
                    <Forget/>
                </Route>
            </Switch>
        </Router>
    )
}
