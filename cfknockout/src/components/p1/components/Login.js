import React, { Component } from 'react';
import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = () => {
        alert(`${email} ${password}`);  
    }
        return(
            <div>       
                <section className='container-fluid'>
                <section className="row d-flex justify-content-center align-items-center">
                    <section className='col-12 col-sm-6 col-md-5 form-container '>
                        <div className="m-0 p-1 border-bottom bg-light">Login to CFKnockout</div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-primary">LogIn</button>
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
export default Login;