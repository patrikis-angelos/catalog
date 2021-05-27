import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import Nav from './components/Nav';
import rootReducer from './reducers/index';
import storage from './assets/logic/localStorage';
import './assets/reset.css';
import './assets/styles.css';

const filters = storage.load();
const state = {
  foods: [],
  meal: {},
  filters,
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
