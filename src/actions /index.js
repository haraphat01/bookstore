import axios from 'axios';
import * as act from '../actionTypes';

const addBook = book => ({
  type: act.CREATE_BOOK,
  payload: {
    title: book.title,
    category: book.category,
  },
});

const removeBook = id => ({
  type: act.REMOVE_BOOK, id,
});

const changeFilter = category => ({
  type: act.CHANGE_FILTER,
  category,

});

const fetchBooksSuccess = books => ({
  type: act.FETCH_BOOKS_SUCCESS,
  payload: { books },
});

const saveBookToDb = obj => async dispatch => {
  axios.post('http://localhost:4000/books', {
    books: obj,
  }).then(() => dispatch(addBook(obj)));
};

const fetchBooks = () => async dispatch => {
  try {
    const books = await axios.get('http://localhost:4000/books');
    return dispatch(fetchBooksSuccess(books.data));
  } catch (e) {
    return e;
  }
};

export {
  addBook, removeBook, changeFilter, saveBookToDb, fetchBooks,
};
