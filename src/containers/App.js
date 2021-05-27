import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodsList from './FoodsList';
import FoodDetails from './FoodDetails';
import {
  fetchFoods, changeFilters, changeMeal, clearFilters,
} from '../actions/index';
import storage from '../assets/logic/localStorage';

function App(props) {
  const {
    foods, filters, meal, fetchFoods, changeFilters, changeMeal, clearFilters,
  } = props;

  useEffect(() => {
    storage.save(filters);
  }, [filters]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <FoodsList
              foods={foods}
              filters={filters}
              changeFilters={changeFilters}
              fetchFoods={fetchFoods}
              clearFilters={clearFilters}
            />
          )}
        />
        <Route
          path="/details"
          render={() => (
            <FoodDetails
              meal={meal}
              filters={filters}
              changeFilters={changeFilters}
              changeMeal={changeMeal}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
  }).isRequired,
  meal: PropTypes.shape({}).isRequired,
  fetchFoods: PropTypes.func.isRequired,
  changeFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  changeMeal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
  filters: state.filters,
  meal: state.meal,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoods: (foods) => dispatch(fetchFoods(foods)),
  changeFilters: (filter, value) => dispatch(changeFilters(filter, value)),
  clearFilters: () => dispatch(clearFilters()),
  changeMeal: (id) => dispatch(changeMeal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
