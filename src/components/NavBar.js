/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const logo = require('../assets/logo.svg');

function NavBar({ cartQuantity, setCartQuantity }) {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbarImg} src={logo.default} alt="" />
      <div className={styles.navbarCart}>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
        <span><Link to="/cart">{cartQuantity}</Link></span>
      </div>
    </div>
  );
}

export default NavBar;
