const FETCH_FOODS = 'FETCH_FOODS';
const CHANGE_FILTERS = 'CHANGE_FILTERS';
const CHANGE_MEAL = 'CHANGE_MEAL';
const CLEAR_FILTERS = 'CLEAR_FOODS';
const actions = {
  FETCH_FOODS, CLEAR_FILTERS, CHANGE_FILTERS, CHANGE_MEAL,
};

const fetchFoods = (foods) => (
  {
    type: FETCH_FOODS,
    foods,
  }
);

const changeFilters = (filter, value) => (
  {
    type: CHANGE_FILTERS,
    filter,
    value,
  }
);

const changeMeal = (meal) => (
  {
    type: CHANGE_MEAL,
    meal,
  }
);

const clearFilters = () => (
  {
    type: CLEAR_FILTERS,
  }
);

export default actions;
export {
  fetchFoods, changeFilters, changeMeal, clearFilters,
};
