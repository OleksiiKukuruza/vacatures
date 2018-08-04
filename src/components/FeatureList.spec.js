import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import FeatureList, { StyledFeatures } from './FeatureList';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('FeatureList', () => {
  it('renders FeatureList without crashing', () => {
    const props = {
      features: ['First', 'Second']
    };
    const { wrapper } = setup(FeatureList, props);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledFeatures without crashing', () => {
    const { wrapper } = setup(StyledFeatures, { theme });
    expect(wrapper).toMatchSnapshot();
  });
});
