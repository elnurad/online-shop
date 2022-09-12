import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CatGalleryHome from './CatGalleryHome';
import Button from './Button';
import styles from './Home.module.css';

function Home({ catImageOne, catImageTwo, catImageThree }) {
  Home.propTypes = {
    catImageOne: PropTypes.string.isRequired,
    catImageTwo: PropTypes.string.isRequired,
    catImageThree: PropTypes.string.isRequired,
  };
  const rangeTitleOne = 'Natural Cat Food';
  const rangeTitleTwo = 'Country Banquet Cat Food';
  const rangeTitleThree = 'Pure Cat Food';
  const rangeTextOne = 'Each delicious flavour in our Natural Cat Food Range contains a tasty mix of natural raw meat with bone alongside carefully selected natural supplements especially chosen for health benefits';
  const rangeTextTwo = 'Our premium Country Banquet Cat Food range contains a selection of added human-grade ingredients providing all the essential nutrients, vitamins and minerals giving your cat the complete meal it needs for optimum health';
  const rangeTextThree = 'Our Pure Cat Food range offers a complementary food for all types of cats. Create your own tailored healthy cat food recipes with 100% pure British meat with bone';
  return (
    <div>
      <div className={styles.container}>
        <div>
          <CatGalleryHome
            catImage={catImageOne}
            rangeTitle={rangeTitleOne}
            rangeText={rangeTextOne}
          />
        </div>
        <div>
          <CatGalleryHome
            catImage={catImageTwo}
            rangeTitle={rangeTitleTwo}
            rangeText={rangeTextTwo}
          />
        </div>
        <div>
          <CatGalleryHome
            catImage={catImageThree}
            rangeTitle={rangeTitleThree}
            rangeText={rangeTextThree}
          />
        </div>
      </div>
      <Link to="/shop">
        <div className={styles.shopButtonRow}>
          <Button buttonText="Shop Our Ranges" />
        </div>
      </Link>
    </div>

  );
}

export default Home;
