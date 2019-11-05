import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, photoUrl, gender, affiliation, eye, hair, skin, love, weapon, profession, position, allies, enemies }) => {
  let alliesElements;
  let enemiesElements;
  if(allies) {
    alliesElements = allies.map((ally, i) => {
      return <li key={i}>{ally}</li>;
    });
  }
  if(enemies) {
    enemiesElements = enemies.map((enemy, i) => {
      return <li key={i}>{enemy}</li>;
    });
  }
  return (
    <div>
      {photoUrl && <img src={photoUrl} />}
      <h1>{name}</h1>
      {gender && <p>Gender: {gender}</p>}
      {eye && <p>Eyes: {eye}</p>}
      {skin && <p>Skin: {skin}</p>}
      {hair && <p>Hair: {hair}</p>}
      {weapon && <p>Weapon: {weapon}</p>}
      {profession && <p>Profession: {profession}</p>}
      {position && <p>Position: {position}</p>}
      {affiliation && <p>Affiliation: {affiliation}</p>}
      {allies && <ul>Allies:
        {alliesElements}
      </ul>}
      {enemies && <ul>Enemies:
        {enemiesElements}
      </ul>}
      {love && <p>Love: {love}</p>}

    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  gender: PropTypes.string,
  affiliation: PropTypes.string,
  eye: PropTypes.string,
  hair: PropTypes.string,
  skin: PropTypes.string,
  love: PropTypes.string,
  weapon: PropTypes.string,
  profession: PropTypes.string,
  position: PropTypes.string,
  allies: PropTypes.array,
  enemies: PropTypes.array
};

export default CharacterDetail;
