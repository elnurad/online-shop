import React from 'react';
import styles from './CatCard.module.css';
// eslint-disable-next-line react/prop-types
function CatCard({ catImage, rangeTitle, rangeText }) {
  return (
    <div>
      <img className={styles.catImg} src={catImage} alt="" />
      <h2 className={styles.rangeTitle}>{rangeTitle}</h2>
      <p className={styles.rangeText}>{rangeText}</p>
    </div>
  );
}

export default CatCard;
