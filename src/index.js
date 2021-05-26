import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './components/Routes';
import Nav from './components/Nav';
import rootReducer from './reducers/index';
import './assets/reset.css';
import './assets/styles.css';

const state = {
  foods: [],
  filters: {
    q: '',
    cuisineType: '',
    dishType: '',
    mealType: '',
    diet: '',
  },
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
