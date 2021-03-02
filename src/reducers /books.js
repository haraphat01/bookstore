import { CREATE_BOOK, REMOVE_BOOK } from "./actionTypes"
let defolt = [
  {
    id: 1,
    title: "Book of life",
    category: "Adventure"
  },

  {
    id: 2,
    title: "Book of heaven",
    category: "Fiction"
  }
]

const books = (state = defolt, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state,
      action.book
      ]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id)
    default:
      return state
  }

}

export default books;