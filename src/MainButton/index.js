import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./mainButton.css";

const MainButton = ({ className, text, label, backgroundImage }) => (
  <button className={classnames(className, styles.button)}>
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={styles.image}
      >
        &nbsp;
      </div>
    </div>
    <div className={styles.label}>{label}</div>
    {
      text.split("/").map(t => <div className={styles.text}>{t}</div>)
    }
  </button>
)

export default MainButton;
