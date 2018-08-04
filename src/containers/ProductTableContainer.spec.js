import React from 'react';
import { mount } from 'enzyme';
import theme from '../theme';
import { mapStateToProps, withLoader, withError } from './ProductTableContainer';
import Loader from '../components/Loader';
import Error from '../components/Error';

const setup = (Component, props) => {
  const wrapper = mount(<Component {...props} />);

  return {
    wrapper
  };
};

describe('ProductTableContainer', () => {
  it('passed correct props', () => {
    const state = {
      vacancies: {
        list: [],
        selectedVacancyId: 1,
        error: 'err',
        loading: true
      }
    };
    expect(mapStateToProps(state)).toEqual({
      vacancies: state.vacancies.list,
      selectedVacancyId: state.vacancies.selectedVacancyId,
      error: state.vacancies.error,
      loading: state.vacancies.loading
    });
  });

  it('shows Loader if loading', () => {
    const { wrapper } = setup(withLoader('div'), { loading: true, theme });
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('shows Error if error occured', () => {
    const { wrapper } = setup(withError('div'), { error: 'failed' });
    expect(wrapper.find(Error).length).toEqual(1);
  });
});
