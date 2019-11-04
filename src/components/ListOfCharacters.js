import React from 'react';
import Character from './Character';

const ListOfCharacters = ({ items }) => {
  const elements = items.map(item => {
    return <li><Character {...item} /></li>
  })
  return (
    <ul>
      {elements}
    </ul>
  )
}

export default Character;