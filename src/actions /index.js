import * as act from '../reducers/actionTypes';

require;

const addBook = book => ({
  type: act.CREATE_BOOK,
  book,
});

 const removeBook = id => ({
  type: act.REMOVE_BOOK, id,
});
export {addBook, removeBook}
