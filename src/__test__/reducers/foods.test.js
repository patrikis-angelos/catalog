import foodsReducer from '../../reducers/foods';
import actions from '../../actions/index';

const { FETCH_FOODS } = actions;

const state = [{ food: 'food0' }];

describe('foodsReducer', () => {
  it('Updates the foods property of the state', () => {
    const foods = [{ food: 'food1' }, { food: 'food2' }];
    const action = {
      type: FETCH_FOODS,
      foods,
    };
    const newState = foodsReducer(state, action);
    expect(newState.length).toBe(2);
  });

  it('Does not mutate the previous state', () => {
    const foods = [{ food: 'food1' }, { food: 'food2' }];
    const action = {
      type: FETCH_FOODS,
      foods,
    };
    const newState = foodsReducer(state, action);
    expect(state).not.toBe(newState);
  });

  it('returns the previous state by default', () => {
    const action = {
      type: '',
      foods: [],
    };
    const newState = foodsReducer(state, action);
    expect(newState.length).toBe(1);
  });
});
