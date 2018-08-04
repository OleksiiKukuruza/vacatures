import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

const setup = (props) => {
  const wrapper = shallow(<Main {...props} />);

  return {
    wrapper
  };
};

describe('Main', () => {
  it('renders only product list if nothing selected', () => {
    const { wrapper } = setup({ selectedVacancyId: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders product list if product selected', () => {
    const { wrapper } = setup({ selectedVacancyId: '1' });
    expect(wrapper).toMatchSnapshot();
  });
});
