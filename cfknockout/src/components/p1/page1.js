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
        <div>
            <section className='container-fluid'>
                <section className="row d-flex justify-content-center align-items-center">
                    <section className='col-12 col-sm-5 col-md-4 form-container '>
                        <div className="m-0 p-1 border-bottom bg-light">Login to CFKnockout</div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Remeber me</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">LogIn</button>
                        </form>
                    </section>
                </section>
            </section>
        </div>
    )
}
