import actions from '../actions/index';

const { CHANGE_FILTERS } = actions;

const filtersReducer = (filterState = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      const newFilters = {
        ...filterState,
      };
      newFilters[action.filter] = action.value;
      return newFilters;
    }
    default:
      return filterState;
  }
};

export default filtersReducer;
