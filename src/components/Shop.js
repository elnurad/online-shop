// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Shop.module.css';
import CatFoodCard from './CatFoodCard';

// const foodImageOne = require('../assets/country_banquet_turkey.jpg');
// const foodImageTwo = require('../assets/cat_beef_chicken.jpg');
// const foodImageThree = require('../assets/cat_lamb_chicken.jpg');
// const foodImageFour = require('../assets/cb_cat_chicken.jpg');
// const foodImageFive = require('../assets/puppy_weaning_paste.jpg');
// const foodImageSix = require('../assets/pure_beef.jpg');
// const foodImageSeven = require('../assets/pure_green_tripe.jpg');
// const foodImageEight = require('../assets/pure_turkey.jpg');

// const foodItems = [{

//   image: foodImageOne,
//   name: 'Country Banquet Turkey',
//   price: 11.20,
//   id: 1,
// },
// {
//   image: foodImageTwo,
//   name: 'Cat Beef Chicken',
//   price: 10.50,
//   id: 2,
// },
// {
//   image: foodImageThree,
//   name: 'Cat Lamb Chicken',
//   price: 9.45,
//   id: 3,
// },
// {
//   image: foodImageFour,
//   name: 'Country Lamb Chicken',
//   price: 12,
//   id: 4,
// },
// {
//   image: foodImageFive,
//   name: 'Puppy Weaning Paste',
//   price: 9.50,
//   id: 5,
// },
// {
//   image: foodImageSix,
//   name: 'Pure Beef',
//   price: 10,
//   id: 6,
// },
// {
//   image: foodImageSeven,
//   name: 'Pure Green Tripe',
//   price: 9.80,
//   id: 7,
// },
// {
//   image: foodImageEight,
//   name: 'Pure Turkey',
//   price: 12,
//   id: 8,
// },
// ];

// eslint-disable-next-line react/prop-types
function Shop({ cart, setCart, foodItems }) {
  Shop.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    foodItems: PropTypes.array.isRequired,
  };
  const addItem = (item) => {
    console.log(cart);
    // eslint-disable-next-line react/prop-types
    if (cart.indexOf(item) > -1) {
      return;
    }
    setCart([...cart, item]);
    // eslint-disable-next-line no-console
  };
  return (
    <div>
      <Link to="/cart">Proceed to Checkout</Link>
      <div className={styles.shopContainer}>
        {foodItems.map((item) => (
          <CatFoodCard
            key={item.id}
            foodImage={item.image}
            foodName={item.name}
            foodPrice={item.price}
            addItem={() => addItem(item)}

          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
