import { normalize } from 'normalizr';
import {
  fetchVacancies,
  fetchVacanciesSuccess,
  fetchVacanciesFailure,
  fetchVacancy,
  VACANCIES_FETCH_REQUEST,
  VACANCIES_FETCH_SUCCESS,
  VACANCIES_FETCH_FAILURE,
  VACANCY_FETCH_REQUEST
} from './vacanciesActions';
import { vacancyListSchema } from '../schema';

describe('vacancies actions', () => {
  it('fetchVacancies should create VACANCIES_FETCH_REQUEST action', () => {
    expect(fetchVacancies()).toEqual({
      type: VACANCIES_FETCH_REQUEST
    })
  });

  it('fetchVacancy should create VACANCIES_FETCH_REQUEST action', () => {
    expect(fetchVacancy('1')).toEqual({
      type: VACANCY_FETCH_REQUEST,
      payload: { id: '1' }
    })
  });

  it('fetchVacanciesSuccess should create VACANCIES_FETCH_SUCCESS action', () => {
    const payload = normalize([{ id: '1', test: 'test' }], vacancyListSchema);
    expect(fetchVacanciesSuccess(payload)).toEqual({
      type: VACANCIES_FETCH_SUCCESS,
      payload
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
