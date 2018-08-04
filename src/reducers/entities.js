import merge from 'lodash.merge';

const entities = (state = { vacancies: {} }, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  return state;
};

export default entities;
