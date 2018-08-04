export const getSelectedVacancyId = state => state.vacancies.selectedVacancyId;
export const getVacancies = state => state.vacancies.allIds.map(id => state.entities.vacancies[id]);
export const getVacancyById = (state, id) => state.entities.vacancies[id];
export const getVacanciesError = state => state.vacancies.error;
export const getVacanciesLoading = state => state.vacancies.loading;
export const getSelectedVacancy = state => getVacancyById(state, getSelectedVacancyId(state));
