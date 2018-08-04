import reducer from './index';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      vacancies: {
        list: [],
        loading: false,
        error: null,
        selectedVacancyId: null
      }
    });
  });
});
