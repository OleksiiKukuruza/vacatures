import { combineReducers } from 'redux';
import {
  VACANCIES_FETCH_FAILURE,
  VACANCIES_FETCH_REQUEST,
  VACANCIES_FETCH_SUCCESS
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

const vacancies = combineReducers({
  list,
  loading
});

export default vacancies;
