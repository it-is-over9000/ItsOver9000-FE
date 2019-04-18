import React from 'react'
import { Route, Link } from 'react-router-dom'

import withAuth from '../utils/AuthHeader'


class Navbar extends React.Component {

    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.props.history.push('/')
    }

    getUser = e => {
        e.preventDefault()
        
        withAuth()
            .get ('https://over9000be2.herokuapp.com/api/users')
            .then (res => {
                console.log(res)
                // localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }
    
    render() {
    if (localStorage.getItem('token')) {
    return (
    <div className="navbar">
        <h2>Chess App</h2>
        <button className = "btn" onClick={this.logout}>Log Out</button>
        <Link to="/account"><button className = "btn" onClick={this.getUser}>Account</button></Link>
       
    </div>
    )} else {
        return (
        <div className="navbar">
            <h2>Chess App</h2>
            <button className="btn">login</button>
            <Link to="/register"><button className = "btn">Register</button></Link>
        </div>
        )
    }
    }
}

export default Navbar