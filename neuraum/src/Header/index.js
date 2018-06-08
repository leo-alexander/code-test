import React from "react";
// import PropTypes from "prop-types";

import logo from "../images/logo.png"
import styles from "./header.css";

const Header = () => (
  <div className={styles.outerContainer}>
    <div className={styles.innerContainer}>
      <img src={logo} className={styles.logo} alt="Fertighaus Logo" />
      <div className={styles.logoText}>Fertighaus.de</div>
    </div>
  </div>
)

export default Header
