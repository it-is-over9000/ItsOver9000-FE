import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import WithMoveValidation from "./components/WithMoveValidation";
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Register from './components/Register'
import FormHolder from './components/FormHolder'
import UserDashboard from './components/UserDashboard'
import PrivateLoginRoute from './components/PrivateLoginRoute'

import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
  }

  logout = () => (
    localStorage.removeItem('token')
  )

  setFen = () => {
  axios 
    .post ( 'https://over9000be2.herokuapp.com/api/games', {fen: '4343'})
    .then (res => {
        console.log(res)
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="container">
          {/* <Route path="/" component={FormHolder} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/chess" render={props => <Navbar logout={this.logout} {...props} />} />
          <Route path="/account" component={UserDashboard} />
          <div style={boardsContainer}>
            <PrivateRoute exact path="/chess" component={WithMoveValidation} />
          </div>
        </div>
        {/* <button onClick={this.setFen}>set fen</button> */}
      </Router>
    );
  }
}

export default App;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  // marginTop: 30,
  // marginBottom: 50,
  background: "black",
  height: "100vh"
};
