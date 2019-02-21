import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import BookPreview from './components/BookPreview';
import SearchBar from "./components/SearchBar";

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        bookResults: null,
        searchTerm: "Harry Potter"
      }

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
      this.search = this.search.bind(this);

    }

  search() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm).then((results) => this.setState({bookResults: results.data.items[0], searchTerm: ""}))
  }

  componentDidMount() { 
   this.search();
  }

  handleSearchChange(e){
    console.log(e.target.value);

    this.setState({
      searchTerm: e.target.value
    });
  }
  handleSearchSubmit(){
    console.log("CLICK")
    this.search();

   
  }
  render() {
          if(this.state.bookResults){
            console.log(Object.keys(this.state.bookResults));
            var Book = <BookPreview 
              src={this.state.bookResults.volumeInfo.imageLinks.thumbnail} 
              alt={this.state.bookResults.volumeInfo.title} 
              title={this.state.bookResults.volumeInfo.title}
              description={this.state.bookResults.volumeInfo.description}
            />
          }
    return (


      <div className="App container">
        <header className="App-header row" >
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onChange={this.handleSearchChange} onSubmit={this.handleSearchSubmit} />
          {
           Book
          }
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
