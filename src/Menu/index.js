import React, { Component } from "react";
import clickOutside from "react-click-outside";

import styles from "./menu.css";

const buttons = [
  { label: "sign up", link: "" },
  { label: "shop", link: "http://www.childershop.co.nz" },
  { label: "depot service", link: "" },
  { label: "about us", link: "" },
]

class Menu extends Component {
  state = {
    showMenu: false,
  }
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }
  handleClickOutside = () => {
    this.toggleMenu();
  }
  render() {
    const { showMenu } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.login}>login</div>
        <div className={styles.hamcontainer} onClick={this.toggleMenu} >
        {
          showMenu ?
            <div className={styles.menu} onClick={this.toggleMenu}>
              {
                buttons.map(
                  b => <a key={Math.random()} href={b.link} className={styles.item}>{b.label}</a>
                )
              }
            </div> :
            <div className={styles.hamburger} />
        }
        </div>
      </div>
    )
  }
}

export default clickOutside(Menu);
