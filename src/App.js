import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

const endpoint = 'https://my-json-server.typicode.com/pvhee/demo/';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charity: 'N/A',
      desc: 'N/A',
      url: 'N/A'
    };
  }

  componentDidMount() {
    if (this.getParam("topic") == "m") {
      this.fetchCharity("mental-health");
    } else {
      this.fetchCharity("homelessness");
    }
  }

  getParam(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i=0;i<url.length;i++) {
      var params = url[i].split("=");
      if(params[0] == param)
        return params[1];
    }
    return false;
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
          url: json[0].url,
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
          <i className="icon icon-arrow-down" />
        </header>
      <div className="page">
        <p>
          Comic Relief are helping fundraise for projects which work towards reducing homelessness
        </p>
        <div className="charity-info">
          <h1>{this.state.charity}</h1>
            <p>{this.state.desc}</p>
            <a href={this.state.url}>Read more about this cause</a>
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
