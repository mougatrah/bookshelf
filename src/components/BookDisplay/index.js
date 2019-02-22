import React, { Component } from "react";
import BookPreview from '../BookPreview';

class BookDisplay extends Component {

    render() {

        return (
            <div className="row bookDisplay">
                <BookPreview
                    src={this.props.src}
                    author={this.props.author}
                    link={this.props.link}
                    alt={"The bookcover for " + this.props.title}
                    title={this.props.title}
                    description={this.props.description}
                />
            </div>
        );
    }

}

export default BookDisplay