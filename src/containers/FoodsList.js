import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoods, changeFilters } from '../actions/index';
import serialize from '../assets/logic/serialize';
import Food from '../components/Food';
import Nav from '../components/Nav';

const FoodsList = (props) => {
  const {
    foods, filters, fetchFoods, changeFilters,
  } = props;
  console.log(filters);

  const getData = async (ingredient, from, to) => {
    const parameters = {
      q: ingredient,
      app_id: process.env.REACT_APP_ID,
      app_key: process.env.REACT_APP_KEY,
      from,
      to,
    };
    const url = serialize('https://api.edamam.com/search?', parameters);
    const response = await fetch(url)
      .then((r) => r.json());
    const foodsArray = [];
    console.log(response);
    for (let i = 0; i < response.hits.length; i += 1) {
      const {
        label, image, ingredients, cuisineType,
      } = response.hits[i].recipe;
      const id = (response.hits[i].recipe.uri).split('_')[1];
      const cuisine = cuisineType ? cuisineType[0] : '';
      foodsArray.push({
        id,
        title: label,
        image,
        ingredients,
        cuisine,
      });
    }
    fetchFoods(foodsArray);
  };

  const handleFilterChange = (filter, value) => {
    changeFilters(filter, value);
  };

  useEffect(() => {
    getData('The most delicious', 0, 99);
  }, []);

  const list = foods.map((food) => {
    const ingredients = food.ingredients || [];
    return (
      <Food
        title={food.title}
        image={food.image}
        ingredients={ingredients}
        cuisine={food.cuisine}
        key={food.id}
      />
    );
  });

  return (
    <>
      <Nav filterHandler={handleFilterChange} />
      <div className="foods-container flex wrap space-between">
        {list}
      </div>
    </>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({}).isRequired,
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
