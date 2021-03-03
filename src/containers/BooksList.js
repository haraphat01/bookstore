import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = props => {
  const { books } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  );
};

const Book = ({ book }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
    </tr>
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
