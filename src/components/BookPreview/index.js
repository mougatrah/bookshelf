import React, { Component } from 'react';
// import Button from '../Button';

import "./style.css"
class BookPreview extends Component {
    render() {
        return (
            <div className="bookPrev">

                <img className="bookImg" alt={this.props.title} src={this.props.src}></img>



                <div className="bookTitle" >{this.props.title}</div>
                <a className="myButton" href={"/view/" + this.props.id}  >View</a>
                <a className="myButton" href={"/API/save/" + this.props.id} >Save</a>
                <div className="bookDesc" >{this.props.description}</div>

                
            </div>
        );
    }
}

export default BookPreview;