import React from 'react'

import {
    Link
  } from "react-router-dom";
export const SignUp = () => {
    return (
        <div>
            <section className='container-fluid'>
                <section className="row d-flex justify-content-center align-items-center">
                    <section className='col-12 col-sm-5 col-md-4 form-container '>
                        <div className="m-0 p-1 border-bottom bg-light">SignUp to CFKnockout</div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">SignUp</button>
                            <Link exact to="/login">Login</Link>
                        </form>
                    </section>
                </section>
            </section>
            {/*  */}
        </div>
    )
}
