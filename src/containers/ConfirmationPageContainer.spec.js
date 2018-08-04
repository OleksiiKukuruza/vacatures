import React from 'react';
import { mapStateToProps, withLifecycle, withLoader } from './ConfirmationPageContainer';
import { mount, shallow } from 'enzyme';
import theme from '../theme';
import Loader from '../components/Loader';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);

  return {
    wrapper
  };
};

describe('ConfirmationPageContainer', () => {
  it('passed correct props', () => {
    const vacancy = {
      id: '2',
      name: 'test'
    };
    const state = {
      entities: {
        vacancies: {
          '2': vacancy
        }
      },
      vacancies: {
        allIds: ['1', '2', '3']
      }
    };
    expect(mapStateToProps(state, { id: '2' })).toEqual({ vacancy });
  });

  it('fetches vacancy by id on componentDidMount', () => {
    const fetchVacancy = jest.fn();
    setup(withLifecycle('div'), { id: '24', fetchVacancy });
    expect(fetchVacancy).toHaveBeenCalledWith('24');
  });

  it('shows Loader if loading', () => {
    const Component = withLoader('div');
    const wrapper = mount(<Component loading theme={theme} />);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('shows Loader if there is no vacancy', () => {
    const Component = withLoader('div');
    const wrapper = mount(<Component vacancy={null} theme={theme} />);
    expect(wrapper.find(Loader).length).toEqual(1);
  });
});
