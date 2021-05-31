import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { id, options, value } = props;

  return (
    <div className="option-wrapper flex space-between relative background-white">
      <select className="background-white option" id={id} value={value}>{options}</select>
      <div className="arrow absolute" />
    </div>
  );
};

Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
