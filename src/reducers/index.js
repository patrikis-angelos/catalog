import { combineReducers } from 'redux';
import foodsReducer from './foods';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  foods: foodsReducer,
  filters: filtersReducer,
});

export default rootReducer;
