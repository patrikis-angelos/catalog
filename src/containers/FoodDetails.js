import PropTypes from 'prop-types';

const FoodDetails = (props) => {
  const { location } = props;
  console.log(location.pathname);
  return (
    <div>foood</div>
  );
};

export default FoodDetails;

FoodDetails.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
