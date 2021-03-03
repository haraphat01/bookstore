import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        {books.map(book => <Book key={book.id} book={book} />)}
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

export default connect(mapStateToProps, null)(BooksList);
