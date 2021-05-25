const FETCH_FOODS = 'FETCH_FOODS';
const actions = { FETCH_FOODS };

const fetchFoods = (foods) => (
  {
    action: FETCH_FOODS,
    foods,
  }
);

export default actions;
export { fetchFoods };