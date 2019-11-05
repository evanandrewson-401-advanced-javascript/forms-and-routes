import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('renders a header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
