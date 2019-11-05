import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';

describe('Footer component', () => {
  it('renders a footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
