import deepFreeze from 'deep-freeze';
import { list, loading, error } from './vacancies'
import {
  fetchVacancies,
  fetchVacanciesSuccess,
  fetchVacanciesFailure
} from '../actions/vacanciesActions';

describe('vacancies', () => {
  describe('list', () => {
    it('should provide the initial state', () => {
      expect(list(undefined, {})).toEqual([]);
    });

    it('should handle VACANCIES_FETCH_SUCCESS action', () => {
      const stateBefore = [{
        test: 'test'
      }];
      const stateAfter = [{
        first: 'result'
      }, {
        second: 'result'
      }];
      const action = fetchVacanciesSuccess(stateAfter);

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(list(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('loading', () => {
    it('should provide the initial state', () => {
      expect(loading(undefined, {})).toEqual(false);
    });

    it('should handle VACANCIES_FETCH_REQUEST action', () => {
      const stateBefore = false;
      const stateAfter = true;
      const action = fetchVacancies();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle VACANCIES_FETCH_SUCCESS action', () => {
      const stateBefore = true;
      const stateAfter = false;
      const action = fetchVacanciesSuccess();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle VACANCIES_FETCH_FAILURE action', () => {
      const stateBefore = true;
      const stateAfter = false;
      const action = fetchVacanciesFailure();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(loading(stateBefore, action)).toEqual(stateAfter);
    });
  });

  describe('error', () => {
    it('should provide the initial state', () => {
      expect(error(undefined, {})).toEqual(null);
    });

    it('should handle VACANCIES_FETCH_FAILURE action', () => {
      const stateBefore = null;
      const stateAfter = 'error';
      const action = fetchVacanciesFailure(stateAfter);

      deepFreeze(action);

      expect(error(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle VACANCIES_FETCH_REQUEST action', () => {
      const stateBefore = 'error';
      const stateAfter = null;
      const action = fetchVacancies();

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(error(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
