import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers ';
import { saveState, loadState } from './containers/loadStorage';

const initial = {
  books: loadState(),
};
const getData = async () => {
  const url = 'https://bookstoreapiakata.herokuapp.com/books';
  const response = await fetch(url);
  const data = await response.json();
  saveState(data);
};

getData();
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
