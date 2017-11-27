import React from "react";

import styles from "./list.css";

const List = ({ buttons }) => (
  <div className={styles.container}>
    {
      buttons.map(
        b => <a key={b.label} href={b.link} className={styles.item}>{b.label}</a>
      )
    }
  </div>
);

export default List;
