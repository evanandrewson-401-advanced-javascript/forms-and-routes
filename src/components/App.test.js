import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  // eslint-disable-next-line no-undef
  global.fetch = jest.fn(() => Promise.resolve({}));
  it('renders Characters', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
