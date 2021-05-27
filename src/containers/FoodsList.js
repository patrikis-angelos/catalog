import { useEffect } from 'react';
import PropTypes from 'prop-types';
import getData from '../assets/logic/fetchData';
import Food from '../components/Food';
import SearchBar from '../components/SearchBar';

const FoodsList = (props) => {
  const {
    foods, filters, fetchFoods, changeFilters, clearFilters,
  } = props;

  const setFoods = async (ingredient, cuisine, from, to) => {
    const foodsArray = await getData(ingredient, cuisine, from, to);
    fetchFoods(foodsArray);
  };

  const handleFilterChange = (filter, value) => {
    changeFilters(filter, value);
  };

  const handleSubmit = () => {
    setFoods(filters, 0, 99);
  };

  const handleClear = () => {
    clearFilters();
  };

  useEffect(() => {
    setFoods(filters, 0, 99);
  }, []);

  let list;
  if (foods.length > 0) {
    list = foods.map((food) => (
      <Food
        id={food.id}
        title={food.title}
        image={food.image}
        cuisine={food.cuisine}
        dish={food.dishType}
        meal={food.mealType}
        key={food.id}
      />
    ));
  } else {
    list = <p className="empty sans">Start searching for your favourite meals!</p>;
  }

  return (
    <>
      <SearchBar
        filters={filters}
        filterHandler={handleFilterChange}
        submitHandler={handleSubmit}
        clear={handleClear}
      />
      <div className="flex wrap">
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
  clearFilters: PropTypes.func.isRequired,
};

export default FoodsList;
