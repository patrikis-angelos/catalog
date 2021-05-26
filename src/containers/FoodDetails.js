import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getData from '../assets/logic/fetch';
import { fetchFoods } from '../actions/index';

const FoodDetails = (props) => {
  const { foods, fetchFoods, location } = props;
  const id = location.pathname.split('/')[2];

  const setFood = async (params, from, to) => {
    const meal = await getData(params, from, to);
    fetchFoods(meal);
  };

  useEffect(() => {
    const params = { q: id };
    setFood(params, 0, 1);
  }, []);

  const meal = foods[0] || [];
  let ingredientList = '';
  if (meal.ingredients) {
    ingredientList = meal.ingredients.map((ing) => <p key={ing.text}>{ing.text}</p>);
  }
  let nutrients = '';
  if (meal.totalNutrients) {
    nutrients = Object.keys(meal.totalNutrients)
      .map((nut) => (
        <p key={meal.totalNutrients[nut].label}>
          {`${meal.totalNutrients[nut].label}: ${meal.totalNutrients[nut].quantity}`}
        </p>
      ));
  }

  return (
    <div className="details">
      <h2>{meal.title}</h2>
      <img src={meal.image} alt="Food" />
      <div>{ingredientList}</div>
      <div>{nutrients}</div>
      <a href={meal.url}>Recipe</a>
    </div>
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
