/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
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
  const handleCheckout = () => {
    alert('Thanks for your shopping with us!');
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartUnorderedList}>
        <ul>
          {cartDisplay.map((item) => (
            <li className={styles.cartDisplayItem} key={item.id}>
              <img src={item.image} alt="" />
              <div className={styles.cartDisplayText}>
                <div className={styles.cartFoodNames}><h4>{item.name}</h4></div>
                <div className={styles.cartPrice}>
                  <p>
                    $
                    {item.price}
                  </p>

                </div>
                <div className={styles.cartQuantityButton}>
                  <button type="button" onClick={() => increment(item)}>+</button>
                  {item.quantity}
                  <button type="button" onClick={() => decrement(item)}>-</button>
                </div>
                <div className={styles.trashCan}>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => removeItem(item)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.paymentUI}>
        {cartDisplay.length === 0 ? (<h1>your cart is empty</h1>)
          : (
            <h3 className={styles.total}>
              Total:

              {cartDisplay.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)}
            </h3>
          )}

        <div><button type="button" onClick={handleCheckout}>Proceed To Checkout</button></div>
        <div><button type="button"><Link to="/shop" style={{ textDecoration: 'none' }}>Back To Shop</Link></button></div>

      </div>
    </div>
  );
}

export default Cart;
