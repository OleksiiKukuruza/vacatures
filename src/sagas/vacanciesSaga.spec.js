import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { loadVacancies } from './vacanciesSaga';
import { fetchVacanciesFailure, fetchVacanciesSuccess } from '../actions/vacanciesActions';
import vacancies from '../mocks';

describe('vacancies Saga', () => {
  it('loadVacancies Saga success', () => {
    const gen = loadVacancies();

    Math.random = () => 1;
    expect(gen.next().value).toEqual(call(delay, 2000));
    expect(gen.next().value).toEqual(put(fetchVacanciesSuccess(vacancies)));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });

  it('loadVacancies Saga failure', () => {
    const gen = loadVacancies();

    Math.random = () => 0;
    expect(gen.next().value).toEqual(call(delay, 2000));
    expect(gen.next().value).toEqual(put(fetchVacanciesFailure('Failed to load vacancies')));
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
