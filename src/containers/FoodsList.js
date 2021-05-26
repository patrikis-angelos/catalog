import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoods, changeFilters } from '../actions/index';
import getData from '../assets/logic/fetch';
import Food from '../components/Food';
import Nav from '../components/Nav';

const FoodsList = (props) => {
  const {
    foods, filters, fetchFoods, changeFilters,
  } = props;

  const setFoods = async (ingredient, cuisine, from, to) => {
    const foodsArray = await getData(ingredient, cuisine, from, to);
    fetchFoods(foodsArray);
  };

  const handleFilterChange = (filter, value) => {
    changeFilters(filter, value);
  };

  const handleSubmit = () => {
    const { q, cuisineType } = filters;
    setFoods(q, cuisineType, 0, 99);
  };

  useEffect(() => {
    const { q, cuisineType } = filters;
    setFoods(q, cuisineType, 0, 99);
  }, []);

  const list = foods.map((food) => (
    <Food
      id={food.id}
      title={food.title}
      image={food.image}
      cuisine={food.cuisine}
      key={food.id}
    />
  ));

  return (
    <>
      <Nav filterHandler={handleFilterChange} submitHandler={handleSubmit} />
      <div className="foods-container flex wrap space-between">
        {list}
      </div>
    </>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
  }).isRequired,
  fetchFoods: PropTypes.func.isRequired,
  changeFilters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoods: (foods) => dispatch(fetchFoods(foods)),
  changeFilters: (filter, value) => dispatch(changeFilters(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
