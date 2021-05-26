import React from 'react';
import PropTypes from 'prop-types';

const Food = (props) => {
  const {
    id, title, image, cuisine,
  } = props;
  return (
    <div className="food">
      <a href={`/details/${id}`}>{title}</a>
      <div className="img-container flex space-around"><img className="img" src={image} alt="food" /></div>
      <p>{cuisine}</p>
    </div>
  );
};

Food.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
};

export default Food;
