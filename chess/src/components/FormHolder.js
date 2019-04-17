import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

const FormHolder = () => {
    return (
        <div className="login-wrapper-container">
            <div className="login-form-wrapper">
                <div className="tabs">
                    <NavLink to="/" >Login</NavLink>
                    <NavLink to="/register" >Register</NavLink>
                </div>
                <Route exact path="/" render={props => <Login {...props}/>} />
                <Route path="/register" render={props => <Register {...props}/>} />
            </div>
        </div>

    )
}

export default FormHolder