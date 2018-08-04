import React from 'react';
import { mapStateToProps } from './OrderContainer';

describe('OrderContainer', () => {
  it('passed correct props', () => {
    const vacancy = {
      id: '2',
      name: 'name'
    };
    const state = {
      entities: {
        vacancies: {
          '2': vacancy
        }
      },
      vacancies: {
        allIds: ['1', '2', '3'],
        selectedVacancyId: '2',
      }
    };
    expect(mapStateToProps(state)).toEqual({ vacancy });
  });
});
