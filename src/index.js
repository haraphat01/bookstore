import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers ';
// import { fetchBooks } from './actions ';

const initial = {
  books: [
    {
      id: 10,
      title: 'Antic Hay',
      category: 'Fiction',
      author: 'An Evil Cradling',
    },
  ],
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, initial,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
// store.dispatch(fetchBooks());
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
