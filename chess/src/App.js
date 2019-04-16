import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'

import WithMoveValidation from "./components/WithMoveValidation";
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div>
        <div style={boardsContainer}>
          <WithMoveValidation />
        </div>
      </div>
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
