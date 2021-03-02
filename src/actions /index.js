import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/actionTypes';

export const addBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK, id,
});
