import React, { Component } from "react";

import List from "./components/List";
import styles from "./menu.css";

const buttons = [
  { label: "sign up", link: "https://www.childershop.co.nz/en/signup" },
  { label: "shop", link: "http://www.childershop.co.nz" },
  { label: "depot service", link: "https://www.childershop.co.nz/en/infos/how_to_use" },
  { label: "about us", link: "https://www.childershop.co.nz/en/infos/about" },
]

class Menu extends Component {
  state = {
    showMenu: false,
  }
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }
  render() {
    const { showMenu } = this.state;
    return (
      <div className={styles.container}>
        <a href="https://www.childershop.co.nz/en/login" className={styles.login}>login</a>
        <div className={styles.hamcontainer} onClick={this.toggleMenu} >
        {
          showMenu ?
            <List buttons={buttons} toggle={this.toggleMenu} /> :
            <div className={styles.hamburger} />
        }
        </div>
      </div>
    )
  }
}

export default Menu;
