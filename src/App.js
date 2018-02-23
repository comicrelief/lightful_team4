import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <img src="../cr.png" />
          <h3>Here's how you can help</h3>
          <i className="icon icon-cross" />
        </header>
      <div className="page page-1">
        <p>
          some text
        </p>
        <button>Donate</button>
      </div>
      </div>
    );
  }
}

export default App;
