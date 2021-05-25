import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { filterHandler } = props;

  const handleFilterChange = (e) => {
    const filter = e.target.id;
    const value = e.target.value === 'Cuisine' ? '' : e.target.value;
    filterHandler(filter, value);
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
          <option>Mediterenian</option>
        </select>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Nav;
