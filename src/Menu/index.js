import React, { Component } from "react";

import List from "./components/List";
import styles from "./menu.css";

const buttons = [
  { label: "sign up", link: "" },
  { label: "shop", link: "http://www.childershop.co.nz" },
  { label: "depot service", link: "" },
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
        <div className={styles.login}>login</div>
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
