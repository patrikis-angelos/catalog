import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
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
    <nav>
      <div className="nav background-green">Catalogue</div>
      <div
        className="filters background-black"
        onChange={(e) => handleFilterChange(e)}
      >
        Filters
        <input id="q" type="text" placeholder="Search by main ingredient" />
        <select id="cuisineType">
          <option>Cuisine</option>
          <option>Italian</option>
          <option>Mediterranean</option>
        </select>
        <button type="button" onClick={handleSubmit}>Search</button>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default Nav;
