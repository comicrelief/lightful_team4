import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <img src="https://i0.wp.com/quaysnews.net/wp-content/uploads/2017/03/cr.png?fit=2000%2C1084" />
          <h3>Here's how you can help</h3>
          <i className="icon icon-cross" />
        </header>
      <div className="page page-1">
        <p>
          Comic Relief are helping fundraise for projects which work towards reducing homelessness
        </p>
        <footer>
          <h2>Give £10 to help</h2>
          <button>Donate</button>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
