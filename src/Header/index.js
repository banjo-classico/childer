import React from "react";

import logoUrl from "../images/childer-grey.png";
import whiteLogo from "../images/childer-white.png";
import List from "./components/List";
import styles from "./header.css";

const buttons = [
  { label: "About", link: "https://www.childershop.co.nz/en/infos/about" },
  { label: "Depot Service", link: "https://www.childershop.co.nz/en/infos/how_to_use" },
  { label: "Shop", link: "http://www.childershop.co.nz" },
  { label: "FAQs", link: "http://www.childershop.co.nz/#faq-popup" },
]

const Header = () => {
  const isMobile = window.innerWidth < 1024;
  return (
    <div>
      <div className={styles.container}>
        <a href="http://www.childershop.co.nz" className={styles.link}>
          <img src={logoUrl} className={styles.logo} alt="childer" />
        </a>
        <div className={styles.overlay} />
        {!isMobile && <List buttons={buttons} />}
        <div className={styles.loginsignup}>
          <a href="https://www.childershop.co.nz/en/signup" className={styles.login}>Sign up</a>
          <a href="https://www.childershop.co.nz/en/login" className={styles.login}>Log in</a>
        </div>
      </div>
      <img className={styles.whitelogo} src={whiteLogo} alt="childer" />
      <div className={styles.subtitle}>{"buy & sell preloved children's clothing &"}<br />{"accessories online"}</div>
      <a href="http://www.childershop.co.nz">
        <div className={styles.header}></div>
      </a>
      {isMobile && <List buttons={buttons} />}
    </div>
  )
}

export default Header
