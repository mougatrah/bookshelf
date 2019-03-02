import React, { Component } from "react";

class Header extends Component {
  

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand" >BookShelf</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="col-sm-12 col-lg-6 nav-link" href="/">Search</a></li>
                        <li className="nav-item"><a className="col-sm-12 col-lg-6 nav-link" href="/saved">Saved</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

