import React, { Component } from 'react';

class SeachBar extends Component {
    
   
    render(){
        return (
            <form onSubmit={this.props.onSubmit} className="row">
                <input className="col-8" onChange={this.props.onChange}></input>
                <button className="btn btn-primary col-4 m-auto" type="submit">Search</button>            
            </form>
        );
    }
}

export default SeachBar;