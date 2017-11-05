import React from "react";

import styles from "./footer.css";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.section}>
        <div className={styles.label}>help</div>
        <a href="https://drive.google.com/file/d/0B1uxDOhcNFJDWTFaSHFuMUw0NkE/view?usp=sharing" className={styles.link}>seller guidelines</a>
        <a href="https://www.childershop.co.nz/en/infos/terms" className={styles.link}>terms of service</a>
        <a href="https://www.childershop.co.nz/en/infos/privacy" className={styles.link}>privacy policy</a>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>contact</div>
        <a href="https://www.childershop.co.nz/en/user_feedbacks/new" className={styles.link}>drop us a line</a>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>connect</div>
        <a href="https://www.facebook.com/childernz" className={styles.link}>facebook</a>
        <a href="https://www.instagram.com/childer_nz/" className={styles.link}>instagram</a>
      </div>
    </div>
  </div>
)

export default Footer;
