import { combineReducers } from 'redux';
import {
  VACANCIES_FETCH_FAILURE,
  VACANCIES_FETCH_REQUEST,
  VACANCIES_FETCH_SUCCESS,
  VACANCY_SELECTED
} from '../actions/vacanciesActions';

export const list = (state = [], action) => {
  if (action.type === VACANCIES_FETCH_SUCCESS) {
    return action.payload.vacancies;
  }

  return state;
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case VACANCIES_FETCH_REQUEST:
      return true;
    case VACANCIES_FETCH_SUCCESS:
    case VACANCIES_FETCH_FAILURE:
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
    case VACANCIES_FETCH_SUCCESS:
      return action.payload.vacancies[0].id;
    default:
      return state;
  }
};

const vacancies = combineReducers({
  list,
  loading,
  error,
  selectedVacancyId
});

export default vacancies;
