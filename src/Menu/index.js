import React, { Component } from "react";

import List from "./components/List";
import styles from "./menu.css";

const buttons = [
  { label: "sign up", link: "http://www.childershop.co.nz/user/marketplace/customlogin?isSeller=false" },
  { label: "shop", link: "http://www.childershop.co.nz" },
  { label: "depot service", link: "http://www.childershop.co.nz/user/policy/return%20policy" },
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
        <a href="http://www.childershop.co.nz/user/marketplace/customlogin?isSeller=false" className={styles.login}>login</a>
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
