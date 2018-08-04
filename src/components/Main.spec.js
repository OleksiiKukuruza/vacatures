import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

const setup = () => {
  const wrapper = shallow(<Main />);

  return {
    wrapper
  };
};

describe('Main', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
