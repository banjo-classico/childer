import React, { Component } from 'react';
import classnames from "classnames";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="menu">
            <div className="menu-item">sign up</div>
            <div className="menu-item">login</div>
            <div className="menu-item">help</div>
          </div>
          <h1 className="name">childer</h1>
        </div>
        <div className="main-container">
          <div className="main">
            <button className={classnames("who-we-are", "button")}>
              <div>&nbsp;</div>
              <span>who we are</span>
            </button>
            <button className={classnames("buy-sell", "button")}>
              <div>&nbsp;</div>
              <span>buy & sell</span>
            </button>
            <button className={classnames("journal", "button")}>
              <div>&nbsp;</div>
              <span>journal</span>
            </button>
            <button className={classnames("depot", "button")}>
              <div>&nbsp;</div>
              <span>depot service</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
