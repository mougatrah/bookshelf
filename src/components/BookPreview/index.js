import React, { Component } from 'react';
import "./style.css"
class BookPreview extends Component {
    render() {
        return (
            <div className="bookPrev row p-3">
                <div className="row">
                
                <div className="col-4">
                    <img className="img-fluid" alt={this.props.title} src={this.props.src}></img>
                </div>

                <div className="col-7">
                    <div className="row">
                        <h5>{this.props.title}</h5>
                    </div>
                    <div className="col-12 text-truncate">
                        {this.props.description}
                    </div>
                </div></div>
            </div>
        );
    }
}

export default BookPreview;