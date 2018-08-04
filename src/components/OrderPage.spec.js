import React from 'react';
import { shallow } from 'enzyme';
import OrderPage from './OrderPage';

const setup = (props) => {
  const wrapper = shallow(<OrderPage {...props} />);

  return {
    wrapper
  };
};

describe('OrderPage', () => {
  it('renders only product list if nothing selected', () => {
    const { wrapper } = setup({ selectedVacancyId: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders product list if product selected', () => {
    const { wrapper } = setup({ selectedVacancyId: '1' });
    expect(wrapper).toMatchSnapshot();
  });
});
