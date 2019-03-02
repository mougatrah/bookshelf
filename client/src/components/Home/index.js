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
      searchTerm: ""
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.search = this.search.bind(this);

  }

  search() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchTerm).then((results) => {
      console.log((results.data.items));
      this.setState({ bookResults: results.data.items, searchTerm: "" })
    })
  }

  handleSave(e) {
    e.preventDefault();
    console.log(e.target.parentNode.childNodes[3]);
    var temp = {
      link: e.target.parentNode.childNodes[0].href,
      title: e.target.parentNode.childNodes[2].innerHTML,
      authors: [e.target.parentNode.childNodes[3].innerHTML],
      description: e.target.parentNode.childNodes[5].innerHTML,
      image: e.target.parentNode.childNodes[4].src
    };
    e.target.parentNode.outerHTML = "";

    console.log(temp);
    axios({
      method: 'post',
      url: '/save',
      responseType: 'json',
      data: temp
    }).then( (response) => {
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
  }

  componentDidMount() {
  
  }

  handleSearchChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });

  }
  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.search();


  }

  render() {
    var Books;

    if (this.state.bookResults) {
       Books = <BookDisplay
        handleSave={this.handleSave}
        books={this.state.bookResults}

      />
    } else {
      Books = <h1 className="col-10">No search results...</h1>
    }
    return (
      <div>
        <Header></Header>
        <SearchBar value={this.state.searchTerm} onChange={this.handleSearchChange} onSubmit={this.handleSearchSubmit} />
        {
          Books
        }
      </div>
    );
  }
}

export default Home;