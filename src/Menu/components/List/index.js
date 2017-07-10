import React, { Component } from "react";
import clickOutside from "react-click-outside";

import styles from "./list.css";

class List extends Component {
  handleClickOutside = () => {
    this.props.toggle();
  }
  render() {
    return (
      <div className={styles.menu}>
        {
          this.props.buttons.map(
            b => <a key={Math.random()} href={b.link} className={styles.item}>{b.label}</a>
          )
        }
      </div>
    );
  }
}

export default clickOutside(List);
