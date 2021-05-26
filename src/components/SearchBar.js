import React from 'react';
import PropTypes from 'prop-types';
import {
  cuisineValues, dishValues, mealValues, dietValues,
} from '../assets/logic/filterValues';

const SearchBar = (props) => {
  const { filterHandler, submitHandler } = props;

  const handleFilterChange = (e) => {
    const filter = e.target.id;
    const value = e.target.value === 'Cuisine' ? '' : e.target.value;
    filterHandler(filter, value);
  };

  const handleSubmit = () => {
    submitHandler();
  };

  const cuisineOptions = cuisineValues.map((option) => <option key={option}>{option}</option>);
  const dishOptions = dishValues.map((option) => <option key={option}>{option}</option>);
  const mealOptions = mealValues.map((option) => <option key={option}>{option}</option>);
  const dietOptions = dietValues.map((option) => <option key={option}>{option}</option>);

  return (
    <div>
      <div
        className="filters background-black"
        onChange={(e) => handleFilterChange(e)}
      >
        <input className="search-bar" id="q" type="text" placeholder="Search" />
        <select id="cuisineType">{cuisineOptions}</select>
        <select id="dishType">{dishOptions}</select>
        <select id="mealType">{mealOptions}</select>
        <select id="diet">{dietOptions}</select>
        <button type="button" onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default SearchBar;
