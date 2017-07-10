import React from "react";

import styles from "./footer.css";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.section}>
        <div className={styles.label}>help</div>
        <a href="" className={styles.link}>FAQs</a>
        <a href="" className={styles.link}>user tips</a>
        <a href="" className={styles.link}>terms of service</a>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>contact</div>
        <a href="" className={styles.link}>drop us a line</a>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>connect</div>
        <a href="" className={styles.link}>facebook</a>
        <a href="" className={styles.link}>instagram</a>
      </div>
    </div>
  </div>
)

export default Footer;
