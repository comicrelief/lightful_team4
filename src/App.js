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
          <img src="https://i0.wp.com/quaysnews.net/wp-content/uploads/2017/03/cr.png?fit=2000%2C1084" />
          <h3>Here's how you can help</h3>
          <i className="icon icon-cross" />
        </header>
      <div className="page">
        <p>
          Comic Relief are helping fundraise for projects which work towards reducing homelessness
        </p>
        <div className="charity-info">
          <h1>{this.state.charity}</h1>
          <p>{this.state.desc}</p>
        </div>
        <footer>
          <h2>Give £10 to help</h2>
            <a href="https://appdonate.sportrelief.com/?amount=10">Donate</a>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
