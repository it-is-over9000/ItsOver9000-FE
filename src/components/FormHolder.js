import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

const FormHolder = () => {
    return (
        <div className="login-wrapper-container">
            <div className="login-form-wrapper">
                <div className="login-wrapper-interior">
                <div className="tabs">
                    <NavLink to="/register" >Register</NavLink>
                    <NavLink to="/login" >Login</NavLink>
                </div>
                <Route exact path="/" render={props => <Redirect to="/login"/>} />
                <Route path="/register" render={props => <Register {...props}/>} />
                <Route exact path="/login" render={props => <Login {...props}/>} />
                </div>
            </div>
        </div>

    )
}

export default FormHolder