import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'

import Knight from './components/Knight'
import Square from './components/Square'
import Board from './components/Board'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Board knightPosition={[3,2]} /> */}
        <Login />
      </div>
    );
  }
}

export default App;
