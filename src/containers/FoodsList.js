import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoods } from '../actions/index';
import serialize from '../assets/logic/serialize';
import Food from '../components/Food';

const FoodsList = (props) => {
  const { foods, fetchFoods } = props;

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
    for (let i = 0; i < response.hits.length; i += 1) {
      const {
        label, image, ingredients, cuisineType,
      } = response.hits[i].recipe;
      const cuisine = cuisineType ? cuisineType[0] : '';
      foodsArray.push({
        id: `${label}${i}`,
        title: label,
        image,
        ingredients,
        cuisine,
      });
    }
    fetchFoods(foodsArray);
  };

  useEffect(() => {
    getData('beef', 0, 10);
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
      <div className="foods-container flex wrap space-between">
        {list}
      </div>
    </>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoods: (foods) => dispatch(fetchFoods(foods)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
