import React from 'react';
import { shallow } from 'enzyme';
import { withLifecycle } from './MainContainer';

describe('MainContainer', () => {
  it('fetches vacancies on componentDidMount', () => {
    const fetchVacancies = jest.fn();
    const Component = withLifecycle('div');
    shallow(<Component fetchVacancies={fetchVacancies} />);
    expect(fetchVacancies).toHaveBeenCalled();
  });
});
