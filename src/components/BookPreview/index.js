import React, { Component } from 'react';

class BookPreview extends Component {
    render() {
        return <div className="row">
            <div className="col-10 m-auto"> 
                <img className="img-fluid float-left" src={this.props.src} alt={this.props.alt}></img>
                <h3>{this.props.title}</h3>
               <h5> <p className="">{this.props.description}
            </p></h5>
            </div>
        </div>
    }
}

export default BookPreview;