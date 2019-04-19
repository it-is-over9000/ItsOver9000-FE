import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { NavLink, Route, Link } from 'react-router-dom'
import Register from './Register'



import { login } from '../actions'

class Login extends React.Component {
    state = {
            username: '',
            password: '',
            welcomeMessage: ''
        }

    login = e => {
        e.preventDefault()
        localStorage.setItem('user', this.state.username)
        
        axios 
            .post ( 'https://over9000be2.herokuapp.com/api/login', {username: this.state.username, password: this.state.password})
            .then (res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
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
                        <form onSubmit={this.login} className="login-form">
                            <input 
                            value={this.state.username}
                            name="username"
                            placeholder="user"
                            onChange={this.handleChanges}
                            />
                            <input 
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={this.handleChanges}
                            />
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                        <Link to="/register"><h4 className="register-text">Not a member? Register here</h4></Link>
                    </div>
                </div>
            </div>
        
        )
    }
}



// export default connect(null, { login })(Login)
export default Login