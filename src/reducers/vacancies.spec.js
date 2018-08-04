import deepFreeze from 'deep-freeze';
import {
  allIds,
  loading,
  error,
  selectedVacancyId
} from './vacancies';
import {
  fetchVacancies,
  fetchVacanciesSuccess,
  fetchVacanciesFailure,
  selectVacancy,
  fetchVacancySuccess
} from '../actions/vacanciesActions';

describe('vacancies', () => {
  describe('allIds', () => {
    it('provides the initial state', () => {
      expect(allIds(undefined, {})).toEqual([]);
    });

    it('handles VACANCIES_FETCH_SUCCESS action', () => {
      const stateBefore = ['1'];
      const stateAfter = ['1', '2'];
      const action = fetchVacanciesSuccess({ result: stateAfter });

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(allIds(stateBefore, action)).toEqual(stateAfter);
    });

    it('handles VACANCY_FETCH_SUCCESS action', () => {
      const stateBefore = ['1'];
      const stateAfter = ['1', '5'];
      const action = fetchVacancySuccess({ result: '5' });

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(allIds(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('loading', () => {
    it('provides the initial state', () => {
      expect(loading(undefined, {})).toEqual(false);
    });

    it('handles VACANCIES_FETCH_REQUEST action', () => {
      const stateBefore = false;
      const stateAfter = true;
      const action = fetchVacancies();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });

    it('handles VACANCIES_FETCH_SUCCESS action', () => {
      const stateBefore = true;
      const stateAfter = false;
      const action = fetchVacanciesSuccess();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });

    it('handles VACANCIES_FETCH_FAILURE action', () => {
      const stateBefore = true;
      const stateAfter = false;
      const action = fetchVacanciesFailure();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('error', () => {
    it('provides the initial state', () => {
      expect(error(undefined, {})).toEqual(null);
    });

    it('handles VACANCIES_FETCH_FAILURE action', () => {
      const stateBefore = null;
      const stateAfter = 'error';
      const action = fetchVacanciesFailure(stateAfter);

      deepFreeze(action);

      expect(error(stateBefore, action)).toEqual(stateAfter);
    });

    it('handles VACANCIES_FETCH_REQUEST action', () => {
      const stateBefore = 'error';
      const stateAfter = null;
      const action = fetchVacancies();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(error(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('selectedVacancyId', () => {
    it('provides the initial state', () => {
      expect(selectedVacancyId(undefined, {})).toEqual(null);
    });

    it('handles VACANCY_SELECTED action', () => {
      const stateBefore = null;
      const stateAfter = '1';
      const action = selectVacancy(stateAfter);

      deepFreeze(action);

      expect(selectedVacancyId(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
