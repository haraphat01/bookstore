
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
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }

}

export default books;