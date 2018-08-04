import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationPage  from './ConfirmationPage';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('ConfirmationPage', () => {
  it('renders without crashing', () => {
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
    const { wrapper } = setup(ConfirmationPage, props);
    expect(wrapper).toMatchSnapshot();
  });
});
