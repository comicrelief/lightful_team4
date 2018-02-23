import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

const endpoint = 'https://my-json-server.typicode.com/pvhee/demo/';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charity: 'N/A',
      desc: 'N/A'
    };
  }

  componentDidMount() {
    // this.fetchCharity("mental-health");
    this.fetchCharity("homelessness");
  }


  fetchCharity(topic) {
    return fetch(endpoint + topic)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          charity: json[0].charity,
          desc: json[0].copywritten_summary,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

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
          {this.state.charity}
          {this.state.desc}
        </p>
        <button>Donate</button>
      </div>
      </div>
    );
  }
}

export default App;
