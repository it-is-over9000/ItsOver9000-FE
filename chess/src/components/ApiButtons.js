import React from 'react'
import axios from 'axios'

import withAuth from '../utils/AuthHeader'

class ApiButtons extends React.Component {
    constructor() {
        super()


    }

    register = e => {
        e.preventDefault()
        
        axios 
            .post ( 'https://over9000be2.herokuapp.com/api/register', {username: 'newname', password: 'password'})
            .then (res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    login = e => {
        e.preventDefault()
        
        axios 
            .post ( 'https://over9000be2.herokuapp.com/api/login', {username: 'newname', password: 'password'})
            .then (res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    getUsers = e => {
        e.preventDefault()
        
        withAuth()
            .get ('https://over9000be2.herokuapp.com/api/users')
            .then (res => {
                console.log(res)
                // localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    changeName = e => {
        e.preventDefault()
        
        withAuth()
            .put ('https://over9000be2.herokuapp.com/api/users/5', {username: 'extranewname'})
            .then (res => {
                console.log(res)
                // localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    deleteUser = e => {
        e.preventDefault()
        
        withAuth()
            .delete ('https://over9000be2.herokuapp.com/api/users/5')
            .then (res => {
                console.log(res)
                // localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={this.register}>Register</button>

                <button onClick={this.login}>Login</button>

                <button onClick={this.getUsers}>Change password</button>

                <button onClick={this.changeName}>Change Name</button>


                <button onClick={this.deleteUser}>Delete</button>


            </div>
        )
    }
 }

 export default ApiButtons