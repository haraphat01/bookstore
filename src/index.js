import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers ';

const initial = {
  books: [
    {
      id: 1,
      title: 'Book of life',
      category: 'Adventure',
    },

    {
      id: 2,
      title: 'Book of heaven',
      category: 'Fiction',
    },
  ],
};
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
