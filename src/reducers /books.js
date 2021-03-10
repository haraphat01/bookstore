import { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS_SUCCESS } from '../actionTypes';

let id = 0;

const books = (state = [], action) => {
  id += 1;
  switch (action.type) {
    case CREATE_BOOK:
      return [...state,
        {
          id,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);

    case FETCH_BOOKS_SUCCESS:
      return action.payload.books;
    default:
      return state;
  }
};

export default books;
