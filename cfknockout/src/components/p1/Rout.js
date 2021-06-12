import React from 'react'
import { Login } from '../base/Login'
import { Forget } from './Forget'
export const Rout = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <Login/>
                </Route>
                <Route exact path = "/">
                    <Forget/>
                </Route>
            </Switch>
        </Router>
    )
}
