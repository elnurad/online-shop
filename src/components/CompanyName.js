import React from 'react';
import styles from './CompanyName.module.css';

const logo = require('../assets/logo.svg');

function CompanyName() {
  return (
    <div className={styles.companyName}>
      <img className={styles.companyNameImg} src={logo.default} alt="" />
    </div>
  );
}

export default CompanyName;
