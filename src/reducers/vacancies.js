import { combineReducers } from 'redux';
import union from 'lodash.union';
import {
  VACANCIES_FETCH_FAILURE,
  VACANCIES_FETCH_REQUEST,
  VACANCIES_FETCH_SUCCESS,
  VACANCY_FETCH_REQUEST,
  VACANCY_FETCH_SUCCESS,
  VACANCY_SELECTED
} from '../actions/vacanciesActions';

export const allIds = (state = [], action) => {
  switch (action.type) {
    case VACANCIES_FETCH_SUCCESS:
      return union(state, action.payload.result);
    case VACANCY_FETCH_SUCCESS:
      return union(state, [action.payload.result]);
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case VACANCIES_FETCH_REQUEST:
    case VACANCY_FETCH_REQUEST:
      return true;
    case VACANCIES_FETCH_SUCCESS:
    case VACANCIES_FETCH_FAILURE:
    case VACANCY_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case VACANCIES_FETCH_FAILURE:
      return action.payload.err;
    case VACANCIES_FETCH_REQUEST:
      return null;
    default:
      return state;
  }
};

export const selectedVacancyId = (state = null, action) => {
  switch (action.type) {
    case VACANCY_SELECTED:
      return action.payload.id;
    default:
      return state;
  }
};

const vacancies = combineReducers({
  allIds,
  loading,
  error,
  selectedVacancyId
});

export default vacancies;
