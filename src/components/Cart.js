import React from 'react';
// import CatFoodCard from './CatFoodCard';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Cart({ cart, setCart }) {
  // eslint-disable-next-line global-require
  // const foodImageTwo = require('../assets/cat_beef_chicken.jpg');
  // eslint-disable-next-line global-require
  // const foodImageThree = require('../assets/cat_lamb_chicken.jpg');
  // eslint-disable-next-line no-unused-vars
  const cartDisplay = [...cart];
  // const sample = [{
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
  // ];
  return (
    <div>
      {cartDisplay.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.name}</h4>
          <p>
            price:
            {item.price}
          </p>
          <p>q: 3</p>
          <p>
            total:
            {' '}
            {item.price * 3}
          </p>
        </div>
        // <CatFoodCard
        //   key={item.id}
        //   foodImage={item.image}
        //   foodName={item.name}
        //   foodPrice={item.price}
        // />

      ))}
    </div>
  );
}

export default Cart;
