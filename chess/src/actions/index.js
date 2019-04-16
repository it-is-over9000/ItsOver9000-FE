import axios from 'axios'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios 
            .post ( 'https://over9000be2.herokuapp.com/', {username: creds})
            .then (res => {
                localStorage.setItem('token', res.data.token)
                this.setState({
                    welcomeMessage: res.data.message
                })
            })
            .catch(err => console.log(err))
}