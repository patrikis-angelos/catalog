const FETCH_FOODS = 'FETCH_FOODS';
const CHANGE_FILTERS = 'CHANGE_FILTERS';
const actions = { FETCH_FOODS, CHANGE_FILTERS };

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

export default actions;
export { fetchFoods, changeFilters };
