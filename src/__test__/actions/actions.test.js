import actions, {
  fetchFoods, changeFilters, changeMeal, clearFilters,
} from '../../actions/index';

const {
  FETCH_FOODS, CLEAR_FILTERS, CHANGE_FILTERS, CHANGE_MEAL,
} = actions;

describe('fetchFoods', () => {
  it('sets the state propery foods to a new array', () => {
    const foods = [{ food: 'food1' }, { food: 'food2' }];
    const expectation = {
      type: FETCH_FOODS,
      foods,
    };
    expect(fetchFoods(foods)).toStrictEqual(expectation);
  });
});

describe('changeFilters', () => {
  it('sets one filter to the given value', () => {
    const filter = 'q';
    const value = 'filter1';
    const expectation = {
      type: CHANGE_FILTERS,
      filter,
      value,
    };
    expect(changeFilters(filter, value)).toStrictEqual(expectation);
  });
});

describe('clreaFilters', () => {
  it('clears all the filters', () => {
    const expectation = {
      type: CLEAR_FILTERS,
    };
    expect(clearFilters()).toStrictEqual(expectation);
  });
});

describe('changeMeal', () => {
  it('sets the meal state property', () => {
    const meal = { property1: 'value1', property2: 'value2' };
    const expectation = {
      type: CHANGE_MEAL,
      meal,
    };
    expect(changeMeal(meal)).toStrictEqual(expectation);
  });
});
