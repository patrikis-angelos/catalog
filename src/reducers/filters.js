import actions from '../actions/index';

const { CHANGE_FILTERS } = actions;

const filtersReducer = (filterState = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      return action.filters;
    }
    default:
      return filterState;
  }
};

export default filtersReducer;
