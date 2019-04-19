import React from 'react'
import chart from '../images/chess_chart.png'
import { Link } from 'react-router-dom'

const Chart = () => {

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.props.history.push('/')
    }

    return (
    <div>
        <div className="navbar">
            <Link to="/account">Account</Link>
            <Link to="/chess"><h2>It's Over 9000!</h2></Link>
            <div className = "menu" onClick={logout}>Log Out</div>      
        </div>
        <div className="chart-container">
            <div className="chart-wrapper">
            <Link to="/chess"><h2 className="white-text">Return to Game</h2></Link>
                <img src={chart} />
            </div>
        </div>
    </div>
    )
}

export default Chart