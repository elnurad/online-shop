import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Shop from './components/Shop';
// eslint-disable-next-line import/no-named-as-default
import Home from './components/Home';

const catImageOne = require('./assets/cat_one.webp');
const catImageTwo = require('./assets/cat_two.jpg');
const catImageThree = require('./assets/cat_three.png');

const foodImageOne = require('./assets/country_banquet_turkey.jpg');
const foodImageTwo = require('./assets/cat_beef_chicken.jpg');
const foodImageThree = require('./assets/cat_lamb_chicken.jpg');
const foodImageFour = require('./assets/cb_cat_chicken.jpg');
const foodImageFive = require('./assets/puppy_weaning_paste.jpg');
const foodImageSix = require('./assets/pure_beef.jpg');
const foodImageSeven = require('./assets/pure_green_tripe.jpg');
const foodImageEight = require('./assets/pure_turkey.jpg');

const foodItems = [{

  image: foodImageOne,
  name: 'Country Banquet Turkey',
  quantity: 1,
  price: 11.20,
  id: 1,
},
{
  image: foodImageTwo,
  name: 'Cat Beef Chicken',
  quantity: 1,
  price: 10.50,
  id: 2,
},
{
  image: foodImageThree,
  name: 'Cat Lamb Chicken',
  quantity: 1,
  price: 9.45,
  id: 3,
},
{
  image: foodImageFour,
  name: 'Country Lamb Chicken',
  quantity: 1,
  price: 12,
  id: 4,
},
{
  image: foodImageFive,
  name: 'Puppy Weaning Paste',
  quantity: 1,
  price: 9.50,
  id: 5,
},
{
  image: foodImageSix,
  name: 'Pure Beef',
  quantity: 1,
  price: 10,
  id: 6,
},
{
  image: foodImageSeven,
  name: 'Pure Green Tripe',
  quantity: 1,
  price: 9.80,
  id: 7,
},
{
  image: foodImageEight,
  name: 'Pure Turkey',
  quantity: 1,
  price: 12,
  id: 8,
},
];

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <Router basename="/">
      <div className="App">
        <NavBar cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
        <Routes>
          <Route path="/" element={<Home catImageOne={catImageOne} catImageTwo={catImageTwo} catImageThree={catImageThree} />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} foodItems={foodItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
