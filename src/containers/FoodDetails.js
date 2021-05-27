import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getData from '../assets/logic/fetch';
import SearchBar from '../components/SearchBar';

const FoodDetails = (props) => {
  const { meal, changeMeal, changeFilters } = props;
  console.log(meal);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const setFood = async (params, from, to) => {
    const [currentMeal] = await getData(params, from, to);
    changeMeal(currentMeal);
  };

  useEffect(() => {
    const params = { q: id };
    setFood(params, 0, 1);
  }, []);

  const currentMeal = meal || [];
  let ingredientList = '';
  if (currentMeal.ingredients) {
    ingredientList = currentMeal.ingredients.map((ing) => <p key={ing.text}>{ing.text}</p>);
  }
  let nutrients = '';
  if (currentMeal.totalNutrients) {
    nutrients = Object.keys(currentMeal.totalNutrients)
      .map((nut) => (
        <p key={currentMeal.totalNutrients[nut].label}>
          {`${currentMeal.totalNutrients[nut].label}: ${currentMeal.totalNutrients[nut].quantity}`}
        </p>
      ));
  }

  return (
    <>
      <SearchBar link="/" filterHandler={changeFilters} />
      <div className="details">
        <h2>{currentMeal.title}</h2>
        <img src={currentMeal.image} alt="Food" />
        <div>{ingredientList}</div>
        <div>{nutrients}</div>
        <a href={currentMeal.url} target="_blank" rel="noreferrer">Recipe</a>
      </div>
    </>
  );
};

FoodDetails.propTypes = {
  meal: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  changeMeal: PropTypes.func.isRequired,
  changeFilters: PropTypes.func.isRequired,
};

export default FoodDetails;
