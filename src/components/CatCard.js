import React from 'react';

// eslint-disable-next-line react/prop-types
function CatCard({ catImage }) {
  return (
    <div>
      <img src={catImage} alt="" />
    </div>
  );
}

export default CatCard;
