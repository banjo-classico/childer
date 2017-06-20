import React, { Component } from 'react';
import classnames from "classnames";

import logoUrl from "./images/childer-black.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="name">
          <img src={logoUrl} className="logo" alt="childer" />
          <div className="menu">
            <div className="menu-item">login</div>
          </div>
        </h1>
        <div className="header">
        </div>
        <div className="main-container">
          <div className="main">
            <button className={classnames("shop", "button")}>
              <div className="img-container"><div>&nbsp;</div></div>
              <div>shop</div>
              <div className="text">Buy and sell preloved children&#39;s clothing<br />& accessories</div>
            </button>
            <button className={classnames("depot", "button")}>
              <div className="img-container"><div>&nbsp;</div></div>
              <div>depot service</div>
              <div className="text">Don&#39;t have time to list your items?<br />Let us do it for you!</div>
            </button>
            <button className={classnames("about-us", "button")}>
              <div className="img-container"><div>&nbsp;</div></div>
              <div>about us</div>
              <div className="text">Two mamas &<br />their dreams</div>
            </button>
            <button className={classnames("journal", "button")}>
              <div className="img-container"><div>&nbsp;</div></div>
              <div>journal</div>
              <div className="text">Latest news and interviews</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
