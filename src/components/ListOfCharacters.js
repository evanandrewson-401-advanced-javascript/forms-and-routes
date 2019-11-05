import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const ListOfCharacters = ({ items, toDetailPage }) => {
  const elements = items.map((item, i) => {
    return <li key={item._id || i}><Character {...item} toDetailPage={toDetailPage} /></li>;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

ListOfCharacters.propTypes = {
  toDetailPage: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default ListOfCharacters;
