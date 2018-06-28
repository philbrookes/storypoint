import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { Home, PhilsThing } from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header className="navbar navbar-default"/>
            <Route exact path="/phils-thing" component={PhilsThing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
