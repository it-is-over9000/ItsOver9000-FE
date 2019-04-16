import React from 'react'


class Navbar extends React.Component {

    logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/')
    }
    
    render() {
    return (<div className="navbar">
        <h2>Website Name</h2>
        <button className = "btn" onClick={this.logout}>Log Out</button>
    </div>
    )
    }
}

export default Navbar