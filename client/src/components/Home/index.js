import React, { Component } from 'react';
import SearchBar from "../SearchBar";
import Header from "../Header";
import BookDisplay from "../BookDisplay";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
          bookResults: null,
          searchTerm: "Harry Potter"
        }
  
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.search = this.search.bind(this);
  
      }
  
    search() {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm).then((results) => this.setState({bookResults: results.data.items, searchTerm: ""}))
    }
  
    handleSave(e) {
        e.preventDefault();
      console.log(e.target.parentNode.childNodes[2].innerHTML)

      axios.post('/save', {
            link: e.target.parentNode.childNodes[0].href,
            title: e.target.parentNode.childNodes[2].innerHTML,
            authors: ["jk", "lol"],
            description: "wtf",
            image: "image"
        }
      ).then(function(response) {
          console.log(response);
      }).catch(function(err){
          console.log(err);
      });
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

    render(){

        if(this.state.bookResults){
            console.log(Object.keys(this.state.bookResults[0].volumeInfo) + this.state.bookResults[0].volumeInfo.infoLink);
            var Books =   <BookDisplay 
                  handleSave={this.handleSave}
                  books={this.state.bookResults}
              />

           
          }
        return (
            <div>
                <Header></Header>
                <SearchBar />
                {
                    Books
                }
            </div>
        );
    }
}

export default Home;