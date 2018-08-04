import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import Order, { StyledOrder, StyledFeatures, StyledButton, JobImg } from './Order';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('Order', () => {
  it('renders Order without crashing', () => {
    const props = {
      vacancy: {
        id: '1',
        name: 'name',
        originalPrice: 100,
        discount: 10,
        image: 'img.src',
        features: ['First', 'Second']
      }
    };
    const { wrapper } = setup(Order, props);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledOrder without crashing', () => {
    const { wrapper } = setup(StyledOrder, {theme});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledFeatures without crashing', () => {
    const { wrapper } = setup(StyledFeatures, {theme});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledButton without crashing', () => {
    const { wrapper } = setup(StyledButton, {theme});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders JobImg without crashing', () => {
    const { wrapper } = setup(JobImg, {theme});
    expect(wrapper).toMatchSnapshot();
  });
});
