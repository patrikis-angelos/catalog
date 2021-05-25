import { combineReducers } from 'redux';
import foodsReducer from './foods';

const rootReducer = () => combineReducers({
  foods: foodsReducer,
});

export default rootReducer;
