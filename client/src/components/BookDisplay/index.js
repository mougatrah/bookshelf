import React, { Component } from "react";
import BookPreview from '../BookPreview';

class BookDisplay extends Component {

    render() {
       var newBooks =  this.props.books.map((book, index) => {
       return (<BookPreview
                key={index}
                handleSave={this.props.handleSave}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors.pop()}
                description={book.volumeInfo.description}
                src={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}

                alt={"The bookcover for " + book.volumeInfo.title}
               
                id={book.id}
                />)
            });
        return (newBooks);

}
}

export default BookDisplay