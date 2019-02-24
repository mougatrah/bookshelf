import React, { Component } from "react";
import BookPreview from '../BookPreview';

class BookDisplay extends Component {

    render() {
        var newBooks = this.props.books.map((book, index) => {
            return (<BookPreview
                key={index}
                handleSave={this.props.handleSave}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown"}
                description={book.searchInfo ? book.searchInfo.textSnippet : "unknown"}
                src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150x200"}
                link={book.volumeInfo.infoLink}

                alt={"The bookcover for " + book.volumeInfo.title}

                id={book.id}
            />)
        });
        return (newBooks);

    }
}

export default BookDisplay