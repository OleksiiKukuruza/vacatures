import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import { Route } from 'react-router-dom';

const setup = () => {
  const wrapper = shallow(<Main />);

  return {
    wrapper
  };
};

describe('Main', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders ConfirmationPageContainer for /:id', () => {
    const { wrapper } = setup();
    const route = wrapper.find(Route).at(0);
    expect(route.props().render({ match: { params: { id: 123 } } })).toMatchSnapshot();
  });

  it('renders OrderPageContainer for /', () => {
    const { wrapper } = setup();
    const route = wrapper.find(Route).at(1);
    expect(route.props().render()).toMatchSnapshot();
  });
});
