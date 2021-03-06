import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getData from '../assets/logic/fetchData';
import SearchBar from '../components/SearchBar';

const FoodDetails = (props) => {
  const {
    meal, filters, changeMeal, changeFilters, clearFilters,
  } = props;
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const setFood = async (params, from, to) => {
    const [currentMeal] = await getData(params, from, to);
    changeMeal(currentMeal);
  };

  const handleClear = () => {
    clearFilters();
  };

  useEffect(() => {
    const params = { q: id };
    setFood(params, 0, 1);
  }, []);

  const currentMeal = meal || [];
  let ingredientList = '';
  if (currentMeal.ingredients) {
    let count = 0;
    ingredientList = currentMeal.ingredients.map((ing) => {
      count += 1;
      return <p key={count}>{ing.text}</p>;
    });
  }

  return (
    <>
      <SearchBar link="/" filters={filters} filterHandler={changeFilters} clear={handleClear} />
      <div className="details">
        <h2 className="details-title">{currentMeal.title}</h2>
        <div className="flex">
          <img className="details-img" src={currentMeal.image} alt="Food" />
          <div className="flex column space-between">
            <div>{ingredientList}</div>
            <a href={currentMeal.url} target="_blank" rel="noreferrer" className="color-green">Check the full recipe here</a>
          </div>
        </div>
      </div>
    </>
  );
};

FoodDetails.propTypes = {
  meal: PropTypes.shape({}).isRequired,
  filters: PropTypes.shape({}).isRequired,
  changeMeal: PropTypes.func.isRequired,
  changeFilters: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default FoodDetails;
