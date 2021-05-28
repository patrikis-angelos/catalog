import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import App from '../../containers/App';
import rootReducer from '../../reducers/index';

const state = {
  foods: [],
  meal: {},
  filters: {
    q: '',
    cuisineType: '',
    dishType: '',
    mealType: '',
  },
};

const store = createStore(rootReducer, state);

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Wrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

describe('App', () => {
  it('renders correctly', () => {
    const tree = render(<App />, { wrapper: Wrapper });
    expect(tree).toMatchSnapshot();
  });
});
