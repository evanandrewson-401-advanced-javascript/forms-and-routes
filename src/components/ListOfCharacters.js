import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const ListOfCharacters = ({ items }) => {
  const elements = items.map((item, i) => {
    return <li key={item._id || i}><Character {...item} /></li>;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

ListOfCharacters.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListOfCharacters;
