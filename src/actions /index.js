import { CREATE_BOOK, REMOVE_BOOK } from "../reducers/actionTypes"
const addBook = (book) => {
    return {
        type: CREATE_BOOK,
        book
    }

}

const removeBook = (id) => {
    return {
        type: REMOVE_BOOK, id
    }

}