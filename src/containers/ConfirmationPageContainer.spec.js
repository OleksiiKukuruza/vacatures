import React from 'react';
import { mapStateToProps } from './ConfirmationPageContainer';

describe('ConfirmationPageContainer', () => {
  it('passed correct props', () => {
    const vacancy = {
      id: '2'
    };
    const state = {
      vacancies: {
        list: [{ id: '1' }, vacancy, { id: '3' }],
        selectedVacancyId: '2',
      }
    };
    expect(mapStateToProps(state)).toEqual({ vacancy });
  });
});
