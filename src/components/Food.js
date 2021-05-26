import React from 'react';
import PropTypes from 'prop-types';

const Food = (props) => {
  const {
    id, title, image, cuisine, dish, meal,
  } = props;

  let dishList = dish || [];
  dishList = dishList.map((d) => <li key={`${title}${d}`}>{d}</li>);
  const cuisineText = cuisine || 'world';
  const mealText = meal || 'anytime';

  return (
    <div className="food">
      <a className="title" href={`/details/${id}`}>{title}</a>
      <div className="flex space-around"><img className="img" src={image} alt="Sorry, we couldn't find that image" /></div> {/*eslint-disable-line*/}
      <p className="m-t-10">{`Cusine:  ${cuisineText}`}</p>
      <ul className="m-t-10">
        {dishList}
      </ul>
      <p className="m-t-10">{`Best for:  ${mealText}`}</p>
    </div>
  );
};

Food.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  dish: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
};

export default Food;
