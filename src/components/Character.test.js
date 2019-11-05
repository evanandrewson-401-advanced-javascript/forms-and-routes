import Character from './Character';
import React from 'react';
import { shallow } from 'enzyme';

const character = {
  _id: '5cf5679a915ecad153ab6a45',
  allies: [
    'Hakoda'
  ],
  enemies: [
    'Ozai'
  ],
  photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/c/cc/Sokka.png/revision/latest?cb=20140905085428',
  name: 'Sokka',
  gender: 'Male',
  eye: 'Blue',
  hair: 'Dark brown ',
  skin: 'Brown',
  love: ' Kaya (love interest; formerly) Suki (girlfriend) Yue (girlfriend; deceased; reincarnated as the moon spirit)',
  weapon: 'Sokka\'s weapons',
  profession: ' Politician Tactician Warrior',
  position: ' Chief of Southern Water Tribe (formerly) Map reader Son of Head Chieftain Hakoda Southern Water Tribe representative and Chairman of the United Republic Council (formerly)',
  affiliation: ' Bendless Boomerang Club[7] Southern Water Tribe Team Avatar United Republic Council',
  first: '',
  __v: 0,
};

const toDetailPage = () => {};

describe('Character', () => {
  it('renders a Character', () => {
    const wrapper = shallow(<Character {...character} toDetailPage={toDetailPage} />);
    expect(wrapper).toMatchSnapshot();
  });
});
