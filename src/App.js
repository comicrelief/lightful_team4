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
      <h3>How to help</h3>
      <p>{this.state.charity}</p>
      <p>{this.state.desc}</p>
      <i class="icon icon-cross" />
      </header>
      </div>
    );
  }
}

export default App;
