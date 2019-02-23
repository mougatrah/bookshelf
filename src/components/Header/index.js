import React, { Component } from "react";
import logo from "../../../src/logo.svg";

class Header extends Component {
  

    render(){
        return (
            <div className="row">
                <h3 className="logoText">Book Search</h3>
                <img src={logo} alt="logo" className="img-fluid col-4" />

            </div>
        );
    }
}

export default Header;