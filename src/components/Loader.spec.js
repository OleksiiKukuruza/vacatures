import React from 'react';
import { shallow } from 'enzyme';
import { ThemedLoader } from './Loader';
import theme from '../theme';

const setup = () => {
  const wrapper = shallow(
    <ThemedLoader theme={theme} />
  );

  return {
    wrapper
  };
};

describe('Loader', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
