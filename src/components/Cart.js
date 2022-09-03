/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
      <ul>
        {cartDisplay.map((item) => (
          <li className={styles.cartDisplayItem} key={item.id}>
            <img src={item.image} alt="" />
            <div className={styles.cartDisplayText}>
              <div className={styles.cartFoodNames}><h4>{item.name}</h4></div>
              <p>
                $
                {item.price}
              </p>
              <p>
                <button type="button" onClick={() => increment(item)}>+</button>
                {item.quantity}
                <button type="button" onClick={() => decrement(item)}>-</button>

              </p>
              <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(item)} />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.paymentUI}>
        {cartDisplay.length === 0 ? (<h1>your cart is empty</h1>)
          : (
            <h3 className={styles.total}>
              Total:

              {cartDisplay.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)}
            </h3>
          )}

        <div><button type="button">Proceed To Checkout</button></div>
        <div><button type="button">Back to Shop</button></div>
      </div>
    </div>
  );
}

export default Cart;
