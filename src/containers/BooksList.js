import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions ';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = id => {
    removeBook(id);
  };
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        {books.map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)}
      </tbody>
    </table>
  );
};
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
