import React from 'react';
import { shallow } from 'enzyme';
import { withLifecycle, mapStateToProps } from './OrderPageContainer';

describe('OrderPageContainer', () => {
  it('passed correct props', () => {
    const state = {
      vacancies: {
        selectedVacancyId: '2',
      }
    };
    expect(mapStateToProps(state)).toEqual({ selectedVacancyId: '2' });
  });

  it('fetches vacancies on componentDidMount', () => {
    const fetchVacancies = jest.fn();
    const Component = withLifecycle('div');
    shallow(<Component fetchVacancies={fetchVacancies} />);
    expect(fetchVacancies).toHaveBeenCalled();
  });
});
