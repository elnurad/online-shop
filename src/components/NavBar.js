import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

const logo = require('../assets/logo.svg');

function NavBar({ cartQuantity }) {
  NavBar.propTypes = {
    cartQuantity: PropTypes.number.isRequired,
  };
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbarImg}><img src={logo.default} alt="" /></Link>
      <div className={styles.navbarCart}>
        <span>
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
          <Link to="/cart">{cartQuantity}</Link>
        </span>
      </div>
    </div>

  );
}

export default NavBar;
