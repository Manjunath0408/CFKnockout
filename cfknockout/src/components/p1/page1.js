/*
auth
*/

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import {SignUp} from './components/SignUp';
import {Login} from './components/Login';
import {Forget} from './components/Forget';
import Header from '../base/Header';

export const Page1 = () => {
    return (
        <Router>
            {/* <Header /> */}
            {/* <Link exact tp="/login">Login</Link> */}
            <Switch>
                <Route exact path={["/","/auth/login"]}>
                    <Login />
                    {/* <h1>Hi</h1> */}
                </Route>
                <Route exact path = "/auth/signup">
                    <SignUp/>
                </Route>
                <Route exact path = "/auth/forget">
                    <Forget/>
                </Route>
            </Switch>
        </Router>
    )
}
