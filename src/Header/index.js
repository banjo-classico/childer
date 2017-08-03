import React from "react";

import logoUrl from "../images/childer-grey.png";
import Menu from "../Menu";
import styles from "./header.css";

const Header = () => (
  <div>
    <div className={styles.container}>
      <img src={logoUrl} className={styles.logo} alt="childer" />
      <Menu />
    </div>
    <div className={styles.subtitle}>{"Buy and sell children's"}<br />{"preloved clothing and accessories"}</div>
    <div className={styles.header}></div>
  </div>
)

export default Header
