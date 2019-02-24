import React, { Component } from 'react';

// import axios from 'axios';
// import Button from '../Button';

import "./style.css"
class BookPreview extends Component {
  

    render() {
        return (
            <div className="bookPrev">
                    <a className="myButton" target="_blank" rel="noopener noreferrer" href={this.props.link} >View</a>

                    <button className="myButton" 
                            onClick={this.props.handleSave ? this.props.handleSave : this.props.handleDelete}
                            id={this.props.id}
                            >{this.props.handleSave ? "Save" : "Delete"}</button>
                
              


                <div className="bookTitle" >{this.props.title}</div>
                <div>{this.props.author}</div>
                <img className="bookImg" alt={this.props.title} src={this.props.src}></img>

                <div className="bookDesc" >{this.props.description}</div>

                
            </div>
        );
    }
}

export default BookPreview;