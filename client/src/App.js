import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import View from "./components/View";

class App extends Component {

  render() {
    
      

    return (


      <div className="App">
       
          <Router>
            <Switch>
              <Route exact path="/saved" component={View} />
              <Route exact path="/" component={Home} />
            </Switch>

          </Router>
        
         
       
      </div>
    );
  }
}

export default App;
