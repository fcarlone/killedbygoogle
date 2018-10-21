import React from 'react';
import { shallow } from 'enzyme';
import Masthead from '../../components/Header';

test('should reander Masthead correctly', () => {
  const wrapper = shallow(<Masthead />);
  expect(wrapper).toMatchSnapshot();
});
