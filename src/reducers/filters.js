import actions from '../actions/index';

const { CHANGE_FILTERS, CLEAR_FILTERS } = actions;

const filtersReducer = (filterState = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      const newFilters = {
        ...filterState,
      };
      newFilters[action.filter] = action.value;
      return newFilters;
    }
    case CLEAR_FILTERS: {
      return {
        q: '',
        cuisineType: '',
        dishType: '',
        mealType: '',
      };
    }
    default:
      return filterState;
  }
};

export default filtersReducer;
