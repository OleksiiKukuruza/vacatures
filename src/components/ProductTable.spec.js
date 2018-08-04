import React from 'react';
import { shallow } from 'enzyme';
import theme from '../theme';
import ProductTable, { StyledRow } from './ProductTable';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('ProductTable', () => {
  it('renders without crashing', () => {
    const vacancies = [{
      id: '1',
      name: 'test',
      period: 21,
      originalPrice: 50,
      discount: 10
    }, {
      id: '2',
      name: 'test1',
      period: 32,
      originalPrice: 60,
      discount: 20
    }];
    const props = { vacancies, selectVacancy: () => null, selectedVacancyId: '1' };
    const { wrapper } = setup(ProductTable, props);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles click on a row', () => {
    const vacancies = [{
      id: '1',
      name: 'test',
      period: 21,
      originalPrice: 50,
      discount: 10
    }, {
      id: '2',
      name: 'test1',
      period: 32,
      originalPrice: 60,
      discount: 20
    }];
    const selectVacancy = jest.fn();
    const props = { vacancies, selectVacancy, selectedVacancyId: '1' };
    const { wrapper } = setup(ProductTable, props);
    const firstRow = wrapper.find(StyledRow).at(0);
    firstRow.simulate('click');
    expect(selectVacancy).toHaveBeenCalledWith(props.selectedVacancyId);
  });

  it('renders StyledRow in active state', () => {
    const { wrapper } = setup(StyledRow, { active: true, theme });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders StyledRow in passive state', () => {
    const { wrapper } = setup(StyledRow, { active: false, theme });
    expect(wrapper).toMatchSnapshot();
  });
});
