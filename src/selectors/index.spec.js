import deepFreeze from 'deep-freeze';
import {
  getVacancies
} from './index';

describe('selectors', () => {
  it('getVacancies should return all vacancies', () => {
    const state = {
      entities: {
        vacancies: {
          '1': {
            id: 1,
            name: 'test1'
          },
          '2': {
            id: 2,
            name: 'test2'
          }
        }
      },
      vacancies: {
        allIds: ['1', '2']
      }
    };
    expect(getVacancies(state)).toEqual([{
      id: 1,
      name: 'test1'
    }, {
      id: 2,
      name: 'test2'
    }]);
  });
});
