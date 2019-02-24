import React, { Component } from 'react';
import BookPreview from '../BookPreview';

class SaveDisplay extends Component {

    render () {
        var savedBooks = this.props.books.map((book, index) => {
            
            return (<BookPreview
                key={index}
                handleDelete={this.props.handleDelete}
                title={book.title}
                author={book.authors.pop()}
                description={book.description}
                src={book.image}
                link={book.link}

                alt={"The bookcover for " + book.title}

                id={book._id}
            />)
        });
        return (savedBooks);
    }

}

export default SaveDisplay;