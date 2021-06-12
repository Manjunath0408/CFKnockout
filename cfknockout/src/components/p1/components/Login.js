import React from 'react'
import './Login.css'

import {
    Link
  } from "react-router-dom";
export const Login = () => {
    return (
        <div>
            <section className='container-fluid'>
                <section className="row d-flex justify-content-center align-items-center">
                    <section className='col-12 col-sm-6 col-md-5 form-container '>
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
                            <button type="submit" className="btn btn-primary">LogIn</button>
                            <Link exact to="/signup">
                                SignUp
                            </Link>
                        </form>
                    </section>
                </section>
            </section>
        </div>
    )
}
