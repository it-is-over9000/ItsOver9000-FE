import React from 'react'

const UserDashboard = () => {

    const username = localStorage.getItem('user')
    return (
        <div>
            <h1>Hi there {username}</h1>

            <button>Change my username</button>
            <button>Delete my account</button>
        </div>
    )
}

export default UserDashboard