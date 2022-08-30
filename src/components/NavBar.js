import React from 'react';
import styles from './NavBar.module.css';

const logo = require('../assets/logo.svg');

function NavBar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbarImg} src={logo.default} alt="" />
    </div>
  );
}

export default NavBar;
