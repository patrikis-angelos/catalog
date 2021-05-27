import React from 'react';
import PropTypes from 'prop-types';
import {
  cuisineValues, dishValues, mealValues,
} from '../assets/logic/filterValues';
import Option from './Option';

const SearchBar = (props) => {
  const {
    filters, link, filterHandler, submitHandler, clear,
  } = props;

  const handleFilterChange = (e) => {
    const filter = e.target.id;
    const defaults = ['Cuisine', 'Dish', 'Meal'];
    const value = defaults.includes(e.target.value) ? '' : e.target.value;
    filterHandler(filter, value);
  };

  const handleSubmit = () => {
    submitHandler();
  };

  const handleClear = () => {
    clear();
  };

  const mapOptions = (values) => {
    const options = values.map((option) => <option key={option}>{option}</option>);
    return options;
  };

  const cuisineOptions = mapOptions(cuisineValues);
  const dishOptions = mapOptions(dishValues);
  const mealOptions = mapOptions(mealValues);

  return (
    <div id="search" className="search-area">
      <div
        className="filters background-black"
        onChange={(e) => handleFilterChange(e)}
      >
        <input className="search-bar" id="q" type="text" placeholder="Search" defaultValue={filters.q} />
        <div className="selection-wrapper flex space-between">
          <Option id="cuisineType" options={cuisineOptions} value={filters.cuisineType} />
          <Option id="dishType" options={dishOptions} value={filters.dishType} />
          <Option id="mealType" options={mealOptions} value={filters.mealType} />
        </div>
        <a href={link} className="submit background-white sans" type="button" onClick={handleSubmit}>Search</a>
        <button className="submit background-white sans" type="button" onClick={handleClear}>Reset filters</button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  filters: PropTypes.shape({
    q: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
    dishType: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.string,
  filterHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func,
  clear: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  link: '#search',
  submitHandler: () => {},
};

export default SearchBar;
