import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, name, photoUrl, toDetailPage }) => {
  return (
    <button value={_id} onClick={toDetailPage}>
      <img src={photoUrl} />
      <h1>{name}</h1>
    </button>
  );
};

Character.propTypes = {
  toDetailPage: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
