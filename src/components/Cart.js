/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Cart.module.css';
// import CatFoodCard from './CatFoodCard';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Cart({
  // eslint-disable-next-line no-unused-vars
  cart, setCart,
}) {
  const cartDisplay = [...cart];
  const increment = (item) => {
    // eslint-disable-next-line no-param-reassign
    item.quantity += 1;
    console.log(item.quantity);
    setCart([...cartDisplay]);
  };
  const decrement = (item) => {
    // eslint-disable-next-line no-param-reassign
    item.quantity -= 1;
    console.log(item.quantity);
    setCart([...cartDisplay]);
  };
  return (
    <div className={styles.cartContainer}>
      {cartDisplay.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.name}</h4>
          <p>
            price:
            {item.price}
          </p>
          <p>
            <button type="button" onClick={() => increment(item)}>+</button>
            {item.quantity}
            <button type="button" onClick={() => decrement(item)}>-</button>

          </p>
          <p>
            total:
            {' '}
            {item.price * item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
