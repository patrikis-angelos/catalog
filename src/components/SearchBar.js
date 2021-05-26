import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div>
      <div
        className="filters background-black"
        onChange={(e) => handleFilterChange(e)}
      >
        <input id="q" type="text" placeholder="Search by main ingredient" />
        <select id="cuisineType">
          <option>Cuisine</option>
          <option>Italian</option>
          <option>Mediterranean</option>
        </select>
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
