import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import './Page1.css'
import {SignUp} from './components/SignUp';
import {Login} from './components/Login';
import {Forget} from './components/Forget';
import Header from '../base/Header';

export const Page1 = () => {
    return (
        <Router>
            <Header />
            {/* <Link exact tp="/login">Login</Link> */}
            <Switch>
                <Route exact path={["/","/login"]}>
                    <Login />
                </Route>
                <Route exact path = "/signup">
                    <SignUp/>
                </Route>
                <Route exact path = "/forget">
                    <Forget/>
                </Route>
            </Switch>
        </Router>
    )
}
