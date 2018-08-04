import reducer from './index';

describe('root reducer', () => {
  it('combines all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      entities: {
        vacancies: {}
      },
      vacancies: {
        allIds: [],
        loading: false,
        error: null,
        selectedVacancyId: null
      }
    });
  });
});
