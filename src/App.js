import React, { Component, Fragment } from 'react';
import Login from './user/Login.js';
import Formr from './user/Formr.js';
import Home from './home/Home';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/form" component={Formr} />
            <Route path="/home" component={Home} />
          </Switch>
        </Fragment>
      </Router>

    )
  }
}


export default App;
