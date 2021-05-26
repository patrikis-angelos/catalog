import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { id, options } = props;
  return (
    <div className="option-wrapper flex space-between relative">
      <select className="option" id={id}>{options}</select>
      <div className="arrow absolute" />
    </div>
  );
};

Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  id: PropTypes.string.isRequired,
};

export default Option;
