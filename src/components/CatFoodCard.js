import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatFoodCard.module.css';

function CatFoodCard({
  foodImage, foodName, foodPrice, addItem,
}) {
  CatFoodCard.propTypes = {
    foodImage: PropTypes.string.isRequired,
    foodName: PropTypes.string.isRequired,
    foodPrice: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.catFoodCardItem}>
      <img className={styles.catFoodImg} src={foodImage} alt="" />
      <h4>{foodName}</h4>
      <p>
        $
        {foodPrice}

      </p>
      <button className={styles.addToCartButton} type="button" onClick={addItem}>Add to Cart</button>
    </div>

  );
}

export default CatFoodCard;
