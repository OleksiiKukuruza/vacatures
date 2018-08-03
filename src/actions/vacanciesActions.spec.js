import {
  fetchVacancies,
  fetchVacanciesSuccess,
  fetchVacanciesFailure,
  VACANCIES_FETCH_REQUEST,
  VACANCIES_FETCH_SUCCESS,
  VACANCIES_FETCH_FAILURE
} from './vacanciesActions';

describe('vacancies actions', () => {
  it('fetchVacancies should create VACANCIES_FETCH_REQUEST action', () => {
    expect(fetchVacancies()).toEqual({
      type: VACANCIES_FETCH_REQUEST
    })
  });

  it('fetchVacanciesSuccess should create VACANCIES_FETCH_SUCCESS action', () => {
    const vacancies = [{ test: 'test' }];
    expect(fetchVacanciesSuccess(vacancies)).toEqual({
      type: VACANCIES_FETCH_SUCCESS,
      payload: { vacancies }
    })
  });

  it('fetchVacanciesFailure should create VACANCIES_FETCH_FAILURE action', () => {
    const err = 'error';
    expect(fetchVacanciesFailure(err)).toEqual({
      type: VACANCIES_FETCH_FAILURE,
      payload: { err }
    })
  });
});
