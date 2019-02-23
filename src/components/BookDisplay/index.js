import React, { Component } from "react";
import BookPreview from '../BookPreview';

class BookDisplay extends Component {

    render() {
       var newBooks =  this.props.books.map((book, index) => {
       
       return (<BookPreview
                key={index}
                src={book.volumeInfo.imageLinks.thumbnail}
                author={book.volumeInfo.author}
                link={book.volumeInfo.author}
                alt={"The bookcover for " + book.volumeInfo.title}
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                id={book.id}
                />)
            });
        return (newBooks);

}
}

export default BookDisplay