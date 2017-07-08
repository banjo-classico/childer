import React, { Component } from 'react';

import shopImage from "./images/psychedelic-night-tram.jpg";
import depotImage from "./images/romantic-bokeh-colors.jpg";
import aboutImage from "./images/abstract-bokeh-hearts.jpg";
import journalImage from "./images/colorful-autumn-leaves.jpg";
import Header from "./Header";
import MainButton from "./MainButton";
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <MainButton
              className={styles.shop}
              label="shop"
              text={`Buy and sell preloved children's clothing/& accessories`}
              backgroundImage={shopImage}
            />
            <MainButton
              className={styles.depot}
              label="depot"
              text={`Don't have time to list your items?/Let us do it for you!`}
              backgroundImage={depotImage}
            />
            <MainButton
              className={styles.about}
              label="about us"
              text={`Two mamas &/their dreams`}
              backgroundImage={aboutImage}
            />
            <MainButton
              className={styles.journal}
              label="journal"
              text={`Latest news and interviews`}
              backgroundImage={journalImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
