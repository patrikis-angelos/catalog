import React from 'react';
import PropTypes from 'prop-types';
import {
  cuisineValues, dishValues, mealValues,
} from '../assets/logic/filterValues';
import Option from './Option';

const SearchBar = (props) => {
  const { link, filterHandler, submitHandler } = props;

  const handleFilterChange = (e) => {
    const filter = e.target.id;
    const defaults = ['Cuisine', 'Dish', 'Meal'];
    const value = defaults.includes(e.target.value) ? '' : e.target.value;
    filterHandler(filter, value);
  };

  const handleSubmit = () => {
    submitHandler();
  };

  const cuisineOptions = cuisineValues.map((option) => <option key={option}>{option}</option>);
  const dishOptions = dishValues.map((option) => <option key={option}>{option}</option>);
  const mealOptions = mealValues.map((option) => <option key={option}>{option}</option>);

  return (
    <div id="search" className="search-area">
      <div
        className="filters background-black"
        onChange={(e) => handleFilterChange(e)}
      >
        <input className="search-bar" id="q" type="text" placeholder="Search" />
        <div className="selection-wrapper flex space-between">
          <Option id="cuisineType" options={cuisineOptions} />
          <Option id="dishType" options={dishOptions} />
          <Option id="mealType" options={mealOptions} />
        </div>
        <a href={link} className="submit background-white sans" type="button" onClick={handleSubmit}>Search</a>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  link: PropTypes.string,
  filterHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func,
};

SearchBar.defaultProps = {
  link: '#search',
  submitHandler: () => {},
};

export default SearchBar;
