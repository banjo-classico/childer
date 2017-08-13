import React from "react";

import logoUrl from "../images/childer-grey.png";
import Menu from "../Menu";
import styles from "./header.css";

const Header = () => (
  <div>
    <div className={styles.container}>
      <a href="http://www.childershop.co.nz"><img src={logoUrl} className={styles.logo} alt="childer" /></a>
      <div className={styles.overlay} />
      <Menu />
    </div>
    <div className={styles.subtitle}>{"buy & sell children's"}<br />{"preloved clothing & accessories"}</div>
    <div className={styles.header}></div>
  </div>
)

export default Header
