import React, { Component, Fragment } from 'react';
import Header from './layout/Header.js';
import Main from './main/Main.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main/>
      </Fragment>
    )
  }
}


export default App;
