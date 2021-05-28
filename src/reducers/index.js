import { combineReducers } from 'redux';
import foodsReducer from './foods';
import filtersReducer from './filters';
import mealReducer from './meal';

const rootReducer = combineReducers({
  foods: foodsReducer,
  filters: filtersReducer,
  meal: mealReducer,
});

export default rootReducer;
