import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import Button from './Button';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('Button', () => {
  it('renders default width without crashing', () => {
    const { wrapper } = setup(Button, {theme});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full width without crashing', () => {
    const { wrapper } = setup(Button, {theme, fullWidth: true});
    expect(wrapper).toMatchSnapshot();
  });
});
