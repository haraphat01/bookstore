import * as act from './..reducers';

export const addBook = book => ({
  type: act.CREATE_BOOK,
  book,
});

export const removeBook = id => ({
  type: act.REMOVE_BOOK, id,
});
