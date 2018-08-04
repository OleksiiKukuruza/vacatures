import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import ProductList, { StyledHeader, StyledProductList } from './ProductList';

const setup = (Component) => {
  const wrapper = shallow(<Component theme={theme} />);

  return {
    wrapper
  };
};

describe('ProductList', () => {
  it('renders ProductList without crashing', () => {
    const { wrapper } = setup(ProductList);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledProductList without crashing', () => {
    const { wrapper } = setup(StyledProductList);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledHeader without crashing', () => {
    const { wrapper } = setup(StyledHeader);
    expect(wrapper).toMatchSnapshot();
  });
});
