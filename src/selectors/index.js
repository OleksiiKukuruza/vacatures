import { createSelector } from 'reselect';

export const getSelectedVacancyId = state => state.vacancies.selectedVacancyId;
export const getVacancies = state => state.vacancies.list;
export const getVacanciesError = state => state.vacancies.error;
export const getVacanciesLoading = state => state.vacancies.loading;

export const getSelectedVacancy = createSelector(
  [getSelectedVacancyId, getVacancies],
  (selectedVacancyId, vacancies) => vacancies.find(vacancy => vacancy.id === selectedVacancyId)
);
