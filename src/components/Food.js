import React from 'react';
import PropTypes from 'prop-types';

const Food = (props) => {
  const {
    title, image, ingredients, cuisine,
  } = props;
  const ingredientList = ingredients.map((ingredient) => (
    <p key={Math.random()}>{ingredient.text}</p>
  ));
  return (
    <div className="food">
      <p>{title}</p>
      <div className="img-container flex space-around"><img className="img" src={image} alt="food" /></div>
      <p>{cuisine}</p>
      {ingredientList}
    </div>
  );
};

Food.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisine: PropTypes.string.isRequired,
};

export default Food;
