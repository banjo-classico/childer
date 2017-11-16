import React from "react";

import List from "./components/List";
import styles from "./menu.css";

const buttons = [
  { label: "About", link: "https://www.childershop.co.nz/en/infos/about" },
  { label: "Depot Service", link: "https://www.childershop.co.nz/en/infos/how_to_use" },
  { label: "Shop", link: "http://www.childershop.co.nz" },
]

const Menu = ({ showMenu }) =>  (
  <div className={styles.container}>
    <List buttons={buttons} />
    <a href="https://www.childershop.co.nz/en/signup" className={styles.login}>Sign up</a>
    <a href="https://www.childershop.co.nz/en/login" className={styles.login}>Log in</a>
  </div>
)

export default Menu;
