import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import Error, { StyledError } from './Error';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('Error', () => {
  it('renders Error without crashing', () => {
    const { wrapper } = setup(Error, { error: 'Failure' });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledError without crashing', () => {
    const { wrapper } = setup(StyledError, { theme });
    expect(wrapper).toMatchSnapshot();
  });
});
