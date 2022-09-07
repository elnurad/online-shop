import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatGalleryHome.module.css';

function CatGalleryHome({ catImage, rangeTitle, rangeText }) {
  CatGalleryHome.propTypes = {
    catImage: PropTypes.string.isRequired,
    rangeTitle: PropTypes.string.isRequired,
    rangeText: PropTypes.string.isRequired,
  };
  return (
    <div>
      <picture>
        <img className={styles.catImg} src={catImage} alt="" />
      </picture>
      <h2 className={styles.rangeTitle}>{rangeTitle}</h2>
      <p className={styles.rangeText}>{rangeText}</p>
    </div>
  );
}

export default CatGalleryHome;
