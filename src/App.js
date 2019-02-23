import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header"
import BookDisplay from "./components/BookDisplay"

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
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm).then((results) => this.setState({bookResults: results.data.items, searchTerm: ""}))
  }

  componentDidMount() { 
   this.search();
  }

  handleSearchChange(e){

    this.setState({
      searchTerm: e.target.value
    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
    this.search();

   
  }
  render() {
    
          if(this.state.bookResults){
            console.log(Object.keys(this.state.bookResults[0].id) + this.state.bookResults[0].id);
            var Books =   <BookDisplay 
                  books={this.state.bookResults}
              />

           
          }

    return (


      <div className="App">
       
          <Header />
          <SearchBar onChange={this.handleSearchChange} onSubmit={this.handleSearchSubmit} />        
        {
          Books
        }
    
        
         
       
      </div>
    );
  }
}

export default App;
