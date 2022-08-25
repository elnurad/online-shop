// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import CatFoodCard from './CatFoodCard';
import styles from './Shop.module.css';
import CompanyName from './CompanyName';

const foodImageOne = require('../assets/country_banquet_turkey.jpg');
const foodImageTwo = require('../assets/cat_beef_chicken.jpg');
const foodImageThree = require('../assets/cat_lamb_chicken.jpg');
const foodImageFour = require('../assets/cb_cat_chicken.jpg');
const foodImageFive = require('../assets/puppy_weaning_paste.jpg');
const foodImageSix = require('../assets/pure_beef.jpg');
const foodImageSeven = require('../assets/pure_green_tripe.jpg');
const foodImageEight = require('../assets/pure_turkey.jpg');

const images = [{

  image: foodImageOne,
  name: 'Country Banquet Turkey',
  id: 1,
},
{
  image: foodImageTwo,
  name: 'Cat Beef Chicken',
  id: 2,
},
{
  image: foodImageThree,
  name: 'Cat Lamb Chicken',
  id: 3,
},
{
  image: foodImageFour,
  name: 'Country Lamb Chicken',
  id: 4,
},
{
  image: foodImageFive,
  name: 'Puppy Weaning Paste',
  id: 5,
},
{
  image: foodImageSix,
  name: 'Pure Beef',
  id: 6,
},
{
  image: foodImageSeven,
  name: 'Pure Green Tripe',
  id: 7,
},
{
  image: foodImageEight,
  name: 'Pure Turkey',
  id: 8,
},
];

function Shop() {
  return (
    <div>
      <Link to="/"><CompanyName /></Link>
      <div className={styles.shopContainer}>
        {images.map((image) => (
          <CatFoodCard
            key={image.id}
            foodImage={image.image}
            foodName={image.name}
          />
        ))}
        {/* <CatFoodCard foodImage={countryBanquet} foodName="Country Banquet Turkey" /> */}
      </div>
    </div>
  );
}

export default Shop;
