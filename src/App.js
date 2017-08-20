import React, { Component } from 'react';
import { injectGlobal } from "styled-components";

import buyImage from "./images/buy.jpg";
import depotImage from "./images/depot.jpg";
import aboutImage from "./images/about.jpg";
import sellImage from "./images/sell.jpg";
import fontTTF from "./fonts/GothamRounded-Medium.ttf"
import fontOTF from "./fonts/GothamRounded-Medium.otf"
import fontWOFF from "./fonts/GothamRounded-Medium.woff"
import fontEOT from "./fonts/GothamRounded-Medium.eot"
import Header from "./Header";
import Footer from "./Footer";
import MainButton from "./MainButton";
import styles from './App.css';

injectGlobal`
  @font-face {
    font-family: 'GothamRounded-Medium';
    src: url(${fontTTF}) format('truetype'), url(${fontEOT}?#iefix) format('embedded-opentype'), url(${fontOTF}) format('opentype'), url(${fontWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

class App extends Component {
  state = {
    email: "",
  }
  handleChange = (e) => {
    this.setState({ email: e.target.value });
  }
  render() {
    const { email } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <div className={styles.maininner}>
              <MainButton
                className={styles.buy}
                label="buy"
                text={`Shop quality preloved children's clothing &/accessories`}
                backgroundImage={buyImage}
                link="http://www.childershop.co.nz"
                flip
              />
              <MainButton
                className={styles.sell}
                label="sell"
                text={`Sell your preloved kids cltohing &/accessories`}
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
                text={`More about childer and its founders`}
                backgroundImage={aboutImage}
                link="http://www.childershop.co.nz/user/policy/about%20us "
                flip
              />
            </div>
          </div>
          <div className={styles.latestnews}>
            <div className={styles.newsheading}>stay in touch</div>
            <div id="mc_embed_signup">
            <form action="//childer.us16.list-manage.com/subscribe/post?u=cdf1ed608a773aeb1b8ce2791&amp;id=24f41e3059" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <label for="mce-EMAIL" className={styles.inputlabel}>sign up to receive our latest newsletter, including what&#39;s new at childer, inspiration, & more</label>
              <div className={styles.inputcontainer}>
          	    <input type="email" value={email} name="EMAIL" className={styles.input} id="mce-EMAIL" placeholder="email address" required onChange={this.handleChange}/>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={styles.inputbutton} /></div>
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

export default App;
