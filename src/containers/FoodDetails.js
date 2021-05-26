import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getData from '../assets/logic/fetch';
import { fetchFoods } from '../actions/index';

const FoodDetails = (props) => {
  const { foods, fetchFoods, location } = props;
  const id = location.pathname.split('/')[2];

  const setFood = async (params, from, to) => {
    console.log(params);
    const meal = await getData(params, from, to);
    fetchFoods(meal);
  };

  useEffect(() => {
    const params = { q: id };
    setFood(params, 0, 1);
  }, []);

  const meal = foods[0] || [];

  return (
    <div>{meal.title}</div>
  );
};

FoodDetails.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  fetchFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoods: (foods) => dispatch(fetchFoods(foods)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
