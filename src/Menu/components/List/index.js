import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/about" className={styles.item}>about us</Link>
      </div>
    );
  }
}

export default clickOutside(List);
