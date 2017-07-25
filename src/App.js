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
          <div id="mc_embed_signup">
          <form action="//childer.us16.list-manage.com/subscribe/post?u=cdf1ed608a773aeb1b8ce2791&amp;id=24f41e3059" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
          	  <label for="mce-EMAIL">Subscribe to our mailing list</label>
        	    <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
// <div style="position: absolute; left: -5000px;" ariaHidden="true"><input type="text" name="b_cdf1ed608a773aeb1b8ce2791_24f41e3059" tabIndex="-1" value=""></div>

export default App;
