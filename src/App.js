import React, { Component } from 'react';

import shopImage from "./images/psychedelic-night-tram.jpg";
import depotImage from "./images/romantic-bokeh-colors.jpg";
import aboutImage from "./images/abstract-bokeh-hearts.jpg";
import journalImage from "./images/colorful-autumn-leaves.jpg";
import Header from "./Header";
import Footer from "./Footer";
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
              link="http://www.childer.co.nz"
            />
            <MainButton
              className={styles.sell}
              label="sell"
              text={`Latest news and interviews`}
              backgroundImage={journalImage}
              link="http://www.childer.co.nz"
            />
            <MainButton
              className={styles.depot}
              label="depot service"
              text={`Don't have time to list your items?/Let us do it for you!`}
              backgroundImage={depotImage}
              link="http://www.childer.co.nz"
            />
            <MainButton
              className={styles.about}
              label="about us"
              text={`Two mamas &/their dreams`}
              backgroundImage={aboutImage}
              link="http://www.childer.co.nz"
            />
          </div>
          <div className={styles.subscribe}>Subscribe</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
