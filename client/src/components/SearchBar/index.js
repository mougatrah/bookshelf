import React, { Component } from 'react';

class SeachBar extends Component {
    
   
    render(){
        return (
            <form onSubmit={this.props.onSubmit} className="container">
                <input className="col-8" onChange={this.props.onChange}></input>
                <input className="btn btn-primary col-4 m-auto" type="submit" value="Search"></input>            
            </form>
        );
    }
}

export default SeachBar;