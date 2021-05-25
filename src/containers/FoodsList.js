import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoods } from '../actions/index';
import serialize from '../assets/logic/serialize';

const FoodsList = (props) => {
  const { foods, fetchFoods } = props;
  console.log(foods);

  const getData = () => {
    const obj = {
      q: 'chicken',
      app_id: process.env.REACT_APP_ID,
      app_key: process.env.REACT_APP_KEY,
      from: '0',
      to: '10',
    };
    const url = serialize('https://api.edamam.com/search?', obj);
    fetch(url)
      .then((r) => r.json())
      .then((response) => {
        const foodsArray = [];
        for (let i = 0; i < response.hits.length; i += 1) {
          const {
            label, image, ingredients, cuisineType,
          } = response.hits[i].recipe;
          foodsArray.push({
            title: label,
            image,
            ingredients,
            cuisine: cuisineType,
          });
        }
        fetchFoods(foodsArray);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>hello</div>
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
