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
export { addBook, removeBook };
