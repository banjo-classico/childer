import React, { Component } from 'react';

import buyImage from "./images/buy.jpg";
import depotImage from "./images/depot.jpg";
import aboutImage from "./images/about.jpg";
import sellImage from "./images/sell.jpg";
import Header from "./Header";
import Footer from "./Footer";
import MainButton from "./MainButton";
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <MainButton
              className={styles.buy}
              label="buy"
              text={`Find things you love & buy preloved children's/clothing & accessories for a fraction of the/retail price`}
              backgroundImage={buyImage}
              link="http://www.childershop.co.nz"
            />
            <MainButton
              className={styles.sell}
              label="sell"
              text={`Sell & share the things you love with other mums/ and dads`}
              backgroundImage={sellImage}
              link="http://www.childershop.co.nz/user/marketplace/customlogin?isSeller=true "
            />
            <MainButton
              className={styles.depot}
              label="depot service"
              text={`Don't have time to list your items?/Let us do it for you!`}
              backgroundImage={depotImage}
              link="http://www.childershop.co.nz/user/policy/return%20policy"
            />
            <MainButton
              className={styles.about}
              label="about us"
              text={`Two mamas &/their dreams`}
              backgroundImage={aboutImage}
              link="/about"
            />
          </div>
          <div className={styles.latestnews}>
            <div className={styles.newsheading}>latest news</div>
            <div id="mc_embed_signup">
            <form action="//childer.us16.list-manage.com/subscribe/post?u=cdf1ed608a773aeb1b8ce2791&amp;id=24f41e3059" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            	  <label for="mce-EMAIL">Sign up for the latest news</label>
          	    <input type="email" value="" name="EMAIL" className={styles.input} id="mce-EMAIL" placeholder="email address" required />
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
// <div style="position: absolute; left: -5000px;" ariaHidden="true"><input type="text" name="b_cdf1ed608a773aeb1b8ce2791_24f41e3059" tabIndex="-1" value=""></div>

export default App;
