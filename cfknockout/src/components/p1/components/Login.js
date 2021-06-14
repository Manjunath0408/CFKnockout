import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        alert(`${this.state.email} ${this.state.password}`);
    }
    render(){
        return(
            <div>       
                <section className='container-fluid'>
                <section className="row d-flex justify-content-center align-items-center">
                    <section className='col-12 col-sm-6 col-md-5 form-container '>
                        <div className="m-0 p-1 border-bottom bg-light">Login to CFKnockout</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"  value={this.state.email} onChange={this.handleEmailChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"  value={this.state.password} onChange={this.handlePasswordChange}/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Remember me</label>
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
}
export default Login;