import mealReducer from '../../reducers/meal';
import actions from '../../actions/index';

const { CHANGE_MEAL } = actions;

const state = {};

describe('mealReducer', () => {
  it('updates the meal property of the state', () => {
    const meal = { q: 'value1', cuisineType: 'value2' };
    const action = {
      type: CHANGE_MEAL,
      meal,
    };
    const newState = mealReducer(state, action);
    expect(newState).toBe(meal);
  });

  it('does not mutate the previous state', () => {
    const meal = { q: 'value1', cuisineType: 'value2' };
    const action = {
      type: CHANGE_MEAL,
      meal,
    };
    mealReducer(state, action);
    expect(state).toStrictEqual({});
  });
});
