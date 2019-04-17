import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

const FormHolder = () => {
    return (
        <div className="login-wrapper-container">
            <div className="login-form-wrapper">
                <div className="tabs">
                    <NavLink to="/login" >Login</NavLink>
                    <NavLink to="/register" >Register</NavLink>
                </div>
                <Route exact path="/" render={props => <Redirect to="/login" /> }/>
                <Route exact path="/login" render={props => <Login {...props}/>} />
                <Route exact path="/register" render={props => <Register {...props}/>} />
            </div>
        </div>

    )
}

export default FormHolder