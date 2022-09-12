import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ buttonText }) {
  Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
  };
  return (
    <button className={styles.Button} type="submit">{buttonText}</button>
  );
}

export default Button;
