import React from 'react'
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {

    logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/')
    }
    
    render() {
    if (localStorage.getItem('token')) {
    return (
    <div className="navbar">
        <h2>Chess App</h2>
        <button className = "btn" onClick={this.logout}>Log Out</button>
       
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