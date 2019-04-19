import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { login } from '../actions'

class Register extends React.Component {
    state = {
            username: '',
            password: '',
            welcomeMessage: '',
            statusText: '',
        }
    

        register = e => {
            e.preventDefault()
            localStorage.setItem('user', this.state.username)
            axios 
                .post ( 'https://over9000be2.herokuapp.com/api/register', {username: this.state.username, password: this.state.password})
                .then (res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.token)
                    this.props.history.push('/chess')
                })
                .catch(err => console.log(err))
                this.props.history.push('/chess')
        }

    handleChanges = e => {
        e.preventDefault()
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="login-page-container">
                <div className="navbar">
                    <h2>It's Over 9000!</h2>
                    {/* <div className = "menu" onClick={this.logout}>Log Out</div>      */}
                </div>
                <div className="other-login-container">
                    <div className="other-login-wrapper">
                        <form onSubmit={this.register} className="register-form">
                            <input 
                            value={this.state.username}
                            name="username"
                            placeholder="user"
                            onChange={this.handleChanges}
                            />
                            <input 
                            value={this.state.password}
                            name="password"
                            placeholder="password"
                            onChange={this.handleChanges}
                            />
                            <button type="submit" className="login-btn">Register</button>
                        </form>
                    </div>
                </div>
                {/* <h2 className="success-message">User {this.state.statusText}</h2> */}
            </div>
        )
    }
}



// export default connect(null, { login })(Login)
export default Register