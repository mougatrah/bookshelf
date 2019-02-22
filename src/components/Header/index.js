import React, { Component } from "react";
import logo from "../../../src/logo.svg";

class Header extends Component {
  

    render(){
        return (
            <div class="row">
                <h3 className="col-8">Book Search</h3>
                <img src={logo} alt="logo" className="img-fluid col-4" />

            </div>
        );
    }
}

export default Header;