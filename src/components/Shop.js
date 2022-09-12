/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Shop.module.css';
import CatFoodCard from './CatFoodCard';
import Button from './Button';

function Shop({
  cart, setCart, foodItems, cartQuantity, setCartQuantity,
}) {
  Shop.propTypes = {
    foodItems: PropTypes.instanceOf(Array).isRequired,
    cart: PropTypes.instanceOf(Array).isRequired,
    setCart: PropTypes.func.isRequired,
    cartQuantity: PropTypes.number.isRequired,
    setCartQuantity: PropTypes.func.isRequired,
  };
  const addItem = (item) => {
    if (cart.indexOf(item) > -1) {
      item.quantity += 1;
      setCartQuantity(cartQuantity + 1);
      return;
    }
    setCart([...cart, item]);
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div className={styles.shopContainer}>
      <div className={styles.foodRowContainer}>
        {foodItems.map((item) => (
          <div key={item.id} className={styles.shopContainerImg}>
            <CatFoodCard
              foodImage={item.image}
              foodName={item.name}
              foodPrice={item.price}
              addItem={() => addItem(item)}
            />
          </div>
        ))}
      </div>
      <Link to="/cart">
        <div className={styles.goToCartButton}>
          <Button buttonText="Go To Cart" />
        </div>
      </Link>
    </div>
  );
}

export default Shop;
