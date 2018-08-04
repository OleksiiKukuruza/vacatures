import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { normalize } from 'normalizr';
import { loadVacancies, loadVacancy } from './vacanciesSaga';
import { fetchVacanciesFailure, fetchVacanciesSuccess, fetchVacancySuccess } from '../actions/vacanciesActions';
import vacancies from '../mocks';
import { vacancyListSchema, vacancySchema } from '../schema';

describe('vacancies Saga', () => {
  it('loadVacancies Saga success', () => {
    const gen = loadVacancies();
    const normalizedVacancies = normalize(vacancies, vacancyListSchema);

    Math.random = () => 1;
    expect(gen.next().value).toEqual(call(delay, 1000));
    expect(gen.next().value).toEqual(put(fetchVacanciesSuccess(normalizedVacancies)));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('loadVacancies Saga failure', () => {
    const gen = loadVacancies();

    Math.random = () => 0;
    expect(gen.next().value).toEqual(call(delay, 1000));
    expect(gen.next().value).toEqual(put(fetchVacanciesFailure('Failed to load vacancies')));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('loadVacancy Saga', () => {
    const gen = loadVacancy({ payload: { id: '1' } });
    const normalizedVacancy = normalize(vacancies.find(({ id }) => id === '1'), vacancySchema);

    Math.random = () => 0;
    expect(gen.next().value).toEqual(call(delay, 500));
    expect(gen.next().value).toEqual(put(fetchVacancySuccess(normalizedVacancy)));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
