import React, { Component } from 'react';

import './App.css';
import logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1 className="tagline">Quality, second hand children&#39;s clothing.</h1>
          <img src={logo} className="logo"/>
        </div>
        <div className="main">
          <button className="button">BLOG</button>
          <button className="button">SHOP</button>
          <button className="button">STYLE</button>
        </div>
      </div>
    );
  }
}

export default App;
