import React, { Component } from "react";
import logo from "../../../src/logo.svg";

class Header extends Component {
  

    render(){
        return (
            <div className="row">
                <h3 className="logoText">BookShelf</h3>
                <img src={logo} alt="logo" className="img col-4" />
                <ul>
                    <li><a className="col-sm-12 col-lg-6" href="/">Search</a></li>
                    <li><a className="col-sm-12 col-lg-6" href="/saved">Saved</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;