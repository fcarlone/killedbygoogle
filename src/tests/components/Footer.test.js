import React from 'react';
import { shallow } from 'enzyme';
import FooterContainer from '../../components/Footer';

test('should render FooterContainer correctly', () => {
  const wrapper = shallow(<FooterContainer />);
  expect(wrapper).toMatchSnapshot();
});
