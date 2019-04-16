import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { login } from '../actions'

class Login extends React.Component {
    state = {
            username: '',
            password: '',
            welcomeMessage: ''
        }
    

    login = e => {
        e.preventDefault()
        // this.props.login(this.state.username).then(() =>{
        //     this.props.history.push('/chess')
        // })
        axios 
            .post ( 'https://over9000be2.herokuapp.com/', {username: this.state.username})
            .then (res => {
                localStorage.setItem('token', res.data.token)
                this.setState({
                    welcomeMessage: res.data.message
                })
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
        <div>
            <form onSubmit={this.login}>
                <input 
                value={this.state.username}
                name="username"
                placeholder="...user"
                onChange={this.handleChanges}
                />
                <input 
                value={this.state.password}
                name="password"
                placeholder="...password"
                onChange={this.handleChanges}
                />
                <button type="submit">Login</button>
            </form>
            <h2>{this.state.welcomeMessage}</h2>
        </div>
        )
    }
}



// export default connect(null, { login })(Login)
export default Login