import React from 'react';
import PropTypes from 'prop-types';
import CatCard from './CatCard';

function CatCardRow({ catImageOne, catImageTwo, catImageThree }) {
  CatCardRow.propTypes = {
    catImageOne: PropTypes.string.isRequired,
    catImageTwo: PropTypes.string.isRequired,
    catImageThree: PropTypes.string.isRequired,
  };
  return (
    <div>
      <CatCard catImage={catImageOne} />

      <CatCard catImage={catImageTwo} />

      <CatCard catImage={catImageThree} />
    </div>

  );
}

export default CatCardRow;
