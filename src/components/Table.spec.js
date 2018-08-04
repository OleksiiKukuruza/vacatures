import React from 'react';
import { shallow } from 'enzyme';
import { Cell, Row } from './Table';

const setup = (Component, props = {}) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('Table', () => {
  it('renders Cell without crashing', () => {
    const { wrapper } = setup(Cell, { size: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Row without crashing', () => {
    const { wrapper } = setup(Row);
    expect(wrapper).toMatchSnapshot();
  });
});
