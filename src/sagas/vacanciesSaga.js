import vacancies from '../mocks';
import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  VACANCIES_FETCH_REQUEST,
  VACANCY_FETCH_REQUEST,
  fetchVacanciesSuccess,
  fetchVacanciesFailure,
  fetchVacancySuccess
} from '../actions/vacanciesActions';
import { normalize } from 'normalizr';
import { vacancyListSchema, vacancySchema } from '../schema';

export function* loadVacancies() {
  yield call(delay, 1000);
  const normalizedVacancies = normalize(vacancies, vacancyListSchema);
  const successOrFailure = Math.random() >= 0.5
    ? fetchVacanciesSuccess(normalizedVacancies)
    : fetchVacanciesFailure('Failed to load vacancies');
  yield put(successOrFailure);
}

export function* loadVacancy({ payload: { id } }) {
  yield call(delay, 500);
  const vacancy = vacancies.find(vac => vac.id === id);
  const normalizedVacancy = normalize(vacancy, vacancySchema);
  yield put(fetchVacancySuccess(normalizedVacancy));
}

function* watchFetchVacancies() {
  yield takeEvery(VACANCIES_FETCH_REQUEST, loadVacancies);
  yield takeEvery(VACANCY_FETCH_REQUEST, loadVacancy);
}

export default watchFetchVacancies;
