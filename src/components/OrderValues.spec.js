import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import OrderValues, { StyledOrderValues, StyledRow } from './OrderValues';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('OrderValues', () => {
  it('renders OrderValues without crashing', () => {
    const props = { name: 'name', originalPrice: 100, discount: 10 };
    const { wrapper } = setup(OrderValues, props);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledOrderValues without crashing', () => {
    const { wrapper } = setup(StyledOrderValues, { theme });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledRow without crashing', () => {
    const { wrapper } = setup(StyledRow, { theme });
    expect(wrapper).toMatchSnapshot();
  });
});
