import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: 'Josh',
            welcomeMessage: ''
        }
    }

    login = () => {
        axios 
            .post ( 'https://over9000be2.herokuapp.com/', {username: this.state.username})
            .then (res => 
                this.setState({
                    welcomeMessage: res.data.message
                }))
            .catch(err => console.log(err))

        // this.setState({
        //     welcomeMessage: res.data.message
        // }
        // )
    }

    render() {
        return (
        <div>
            <button onClick={this.login}>Login</button>
            <h2>{this.state.welcomeMessage}</h2>
        </div>
        )
    }
}

export default Login