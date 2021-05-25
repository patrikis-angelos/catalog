import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FoodsList = (props) => {
  const { foods } = props;
  console.log(props);
  console.log(foods);

  return (
    <div>hello</div>
  );
};

FoodsList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToProps, null)(FoodsList);
