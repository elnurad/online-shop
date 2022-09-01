/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Cart.module.css';
// import CatFoodCard from './CatFoodCard';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Cart({
  // eslint-disable-next-line no-unused-vars
  cart, setCart, cartQuantity, setCartQuantity,
}) {
  const cartDisplay = [...cart];
  const increment = (item) => {
    // eslint-disable-next-line no-param-reassign
    item.quantity += 1;
    setCartQuantity(cartQuantity + 1);
    console.log(item.quantity);
    setCart([...cartDisplay]);
  };
  const decrement = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartQuantity(cartQuantity - 1);
      console.log(item.quantity);
      setCart([...cartDisplay]);
    }
  };
  const removeItem = (item) => {
    const newCartDisplay = cartDisplay.filter((cartItem) => item.id !== cartItem.id);
    setCart([...newCartDisplay]);
    setCartQuantity(cartQuantity - item.quantity);
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
          <button type="button" onClick={() => removeItem(item)}>remove item</button>
        </div>
      ))}
      {cartDisplay.length === 0 ? (<h1>your cart is empty</h1>)
        : (
          <h1>
            Total:
            {
        cartDisplay.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
        }
          </h1>
        )}
    </div>
  );
}

export default Cart;
