import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatFoodCard.module.css';

function CatFoodCard({
  foodImage, foodName, foodPrice, handleClick,
}) {
  CatFoodCard.propTypes = {
    foodImage: PropTypes.string.isRequired,
    foodName: PropTypes.string.isRequired,
    foodPrice: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  return (
    <div>
      <img className={styles.catFoodImg} src={foodImage} alt="" />
      <h4>{foodName}</h4>
      <p>
        $
        {foodPrice}

      </p>
      <button type="button" onClick={handleClick}>Add to Cart</button>
    </div>

  );
}

export default CatFoodCard;
