import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => {
  return (
    <div>
      <img src={photoUrl} />
      <h1>{name}</h1>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
