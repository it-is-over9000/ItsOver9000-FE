import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import WithMoveValidation from "./components/WithMoveValidation";
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'

class App extends Component {

  logout = () => (
    localStorage.removeItem('token')
  )

  render() {
    return (
      <Router>
        <div>
          {/* <Navbar logout={this.logout}/> */}
          <Route exact path="/" component={Login} />
          <div style={boardsContainer}>
            <PrivateRoute exact path="/chess" component={WithMoveValidation} />
          </div>
        </div>
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
  marginTop: 30,
  marginBottom: 50
};
