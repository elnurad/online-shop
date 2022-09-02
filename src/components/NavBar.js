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
      <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
      {/* <FontAwesomeIcon icon={faCartShopping} /> */}
      <span>{cartQuantity}</span>
    </div>
  );
}

export default NavBar;
