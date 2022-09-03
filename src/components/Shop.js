/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Shop.module.css';
import CatFoodCard from './CatFoodCard';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Shop({
  cart, setCart, foodItems, cartQuantity, setCartQuantity,
}) {
  Shop.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    foodItems: PropTypes.array.isRequired,
  };
  const addItem = (item) => {
    console.log(cart);
    // eslint-disable-next-line react/prop-types
    if (cart.indexOf(item) > -1) {
      item.quantity += 1;
      setCartQuantity(cartQuantity + 1);
      return;
    }
    setCart([...cart, item]);
    setCartQuantity(cartQuantity + 1);
    console.log(cartQuantity);
  };

  return (
    <div>
      <div className={styles.shopContainer}>
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
    </div>
  );
}

export default Shop;
