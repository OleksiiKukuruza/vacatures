import deepFreeze from 'deep-freeze';
import entities from './entities';

describe('entities', () => {
  it('should provide the initial state', () => {
    expect(entities(undefined, {})).toEqual({ vacancies: {} });
  });

  it('should handle all actions with entities', () => {
    const stateBefore = {
      vacancies: {
        '3': {
          id: '3',
          name: 'test3'
        }
      }
    };
    const stateAfter = {
      vacancies: {
        '1': {
          id: '1',
          name: 'test'
        },
        '2': {
          id: '2',
          name: 'test2'
        },
        '3': {
          id: '3',
          name: 'test3'
        }
      }
    };
    const action = {
      payload: {
        entities: {
          vacancies: {
            '1': {
              id: '1',
              name: 'test'
            },
            '2': {
              id: '2',
              name: 'test2'
            }
          }
        }
      }
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(entities(stateBefore, action)).toEqual(stateAfter);
  });
});
