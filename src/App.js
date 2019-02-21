import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        bookResults: "HEllo",
        searchTerm: "Harry Potter"
      }
    }

  componentDidMount() { 
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm).then((results) => this.setState({bookResults: JSON.stringify(results)}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.bookResults}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
