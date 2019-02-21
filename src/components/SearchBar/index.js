import React, { Component } from 'react';

class SeachBar extends Component {
    
   
    render(){
        return (
            <div>
                <input onChange={this.props.onChange}></input>
                <button className="btn btn-primary" onClick={this.props.onSubmit}>Search</button>            
            </div>
        );
    }
}

export default SeachBar;