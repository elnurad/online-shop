import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatFoodCard.module.css';

function CatFoodCard({ foodImage, foodName }) {
  CatFoodCard.propTypes = {
    foodImage: PropTypes.string.isRequired,
    foodName: PropTypes.string.isRequired,
  };

  return (
    <div>
      <img className={styles.catFoodImg} src={foodImage} alt="" />
      <h4>{foodName}</h4>
      <button type="button">Add to Cart</button>
    </div>

  );
}

export default CatFoodCard;
