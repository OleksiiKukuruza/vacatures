import vacancies from '../mocks';
import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  VACANCIES_FETCH_REQUEST,
  fetchVacanciesSuccess,
  fetchVacanciesFailure
} from '../actions/vacanciesActions';

export function* loadVacancies() {
  yield call(delay, 2000);
  const successOrFailure = Math.random() >= 0.5
    ? fetchVacanciesSuccess(vacancies)
    : fetchVacanciesFailure('Failed to load vacancies');
  yield put(successOrFailure);
}

export function* watchFetchVacancies() {
  yield takeEvery(VACANCIES_FETCH_REQUEST, loadVacancies);
}

export default watchFetchVacancies;
