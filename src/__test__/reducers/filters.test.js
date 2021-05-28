import filtersReducer from '../../reducers/filters';
import actions from '../../actions/index';

const { CLEAR_FILTERS, CHANGE_FILTERS } = actions;

const state = {
  q: '', cuisineType: '', dishType: '', mealType: '',
};

describe('filtersReducer', () => {
  it('changes a single filter', () => {
    const filter = 'q';
    const value = 'filter1';
    const action = {
      type: CHANGE_FILTERS,
      filter,
      value,
    };
    const newState = filtersReducer(state, action);
    expect(newState.q).toBe('filter1');
  });

  it('Does not mutate the original state', () => {
    const filter = 'cuisineType';
    const value = 'test';
    const action = {
      type: CHANGE_FILTERS,
      filter,
      value,
    };
    const newState = filtersReducer(state, action);
    expect(newState.cuisineType).toBe('test');
    expect(state.cuisineType).not.toBe('test');
  });

  it('clears all the filters', () => {
    const testState = {
      q: 'value1', cuisineType: 'value2', dishType: 'value3', mealType: 'value4',
    };
    const action = {
      type: CLEAR_FILTERS,
    };
    const newState = filtersReducer(testState, action);
    expect(newState.q).toBe('');
  });

  it('returns the same state by default', () => {
    const testState = {
      q: 'value1', cuisineType: 'value2', dishType: 'value3', mealType: 'value4',
    };
    const action = {
      type: '',
    };
    const newState = filtersReducer(testState, action);
    expect(newState.q).toBe('value1');
  });
});
