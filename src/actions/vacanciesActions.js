export const VACANCIES_FETCH_REQUEST = 'VACANCIES_FETCH_REQUEST';
export const VACANCIES_FETCH_SUCCESS = 'VACANCIES_FETCH_SUCCESS';
export const VACANCIES_FETCH_FAILURE = 'VACANCIES_FETCH_FAILURE';

export const fetchVacancies = () => ({
  type: VACANCIES_FETCH_REQUEST
});

export const fetchVacanciesSuccess = vacancies => ({
  type: VACANCIES_FETCH_SUCCESS,
  payload: {
    vacancies
  }
});

export const fetchVacanciesFailure = err => ({
  type: VACANCIES_FETCH_FAILURE,
  payload: {
    err
  }
});
