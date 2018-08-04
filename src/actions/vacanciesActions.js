export const VACANCIES_FETCH_REQUEST = 'VACANCIES_FETCH_REQUEST';
export const VACANCIES_FETCH_SUCCESS = 'VACANCIES_FETCH_SUCCESS';
export const VACANCIES_FETCH_FAILURE = 'VACANCIES_FETCH_FAILURE';

export const VACANCY_FETCH_REQUEST = 'VACANCY_FETCH_REQUEST';
export const VACANCY_FETCH_SUCCESS = 'VACANCY_FETCH_SUCCESS';

export const VACANCY_SELECTED = 'VACANCY_SELECTED';

export const fetchVacancies = () => ({
  type: VACANCIES_FETCH_REQUEST
});

export const fetchVacanciesSuccess = payload => ({
  type: VACANCIES_FETCH_SUCCESS,
  payload
});

export const fetchVacanciesFailure = err => ({
  type: VACANCIES_FETCH_FAILURE,
  payload: { err }
});

export const fetchVacancy = id => ({
  type: VACANCY_FETCH_REQUEST,
  payload: { id }
});

export const fetchVacancySuccess = payload => ({
  type: VACANCY_FETCH_SUCCESS,
  payload
});

export const selectVacancy = id => ({
  type: VACANCY_SELECTED,
  payload: { id }
});
