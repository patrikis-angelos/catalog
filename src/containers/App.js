import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FoodsList from './FoodsList';
import FoodDetails from './FoodDetails';
import { fetchFoods, changeFilters, changeMeal } from '../actions/index';

function App(props) {
  const {
    foods, filters, meal, fetchFoods, changeFilters, changeMeal,
  } = props;
  console.log(filters);
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
  changeMeal: (id) => dispatch(changeMeal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
