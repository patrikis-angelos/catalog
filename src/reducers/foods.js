import actions from '../actions/index';

const { FETCH_FOODS } = actions

const foodsReducer = (foodState = [], action) => {
  switch (action.type) {
    case FETCH_FOODS: {
      return action.foods;
    }
    default:
      return foodState;
  }
}

export default foodsReducer;