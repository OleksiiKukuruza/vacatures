import { combineReducers } from 'redux';
import entities from './entities';
import vacancies from './vacancies';

const rootReducer = combineReducers({
  entities,
  vacancies
});

export default rootReducer;
