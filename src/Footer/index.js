import React from "react";

import styles from "./footer.css";

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.section}>
        <div className={styles.label}>help</div>
        <a href="http://www.childershop.co.nz/user/policy/faq" className={styles.link}>FAQs</a>
        <a href="https://drive.google.com/file/d/0B1uxDOhcNFJDX1BvYWUxbFVrUHc/view?usp=sharing" className={styles.link}>seller guidelines</a>
        <a href="http://www.childershop.co.nz/user/policy/terms%20of%20service" className={styles.link}>terms of service</a>
      </div>
      <div className={styles.section}>
        <div className={styles.label}>contact</div>
        <a href="http://www.childershop.co.nz/user/policy/contact%20us" className={styles.link}>drop us a line</a>
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
