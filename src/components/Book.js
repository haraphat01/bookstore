import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions ';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;

  const handleRemoveBook = () => {
    removeBook(id);
  };

  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th><button type="button" onClick={handleRemoveBook}>Remove</button></th>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});
Book.propTypes = {
  removeBook: PropTypes.func.isRequired,
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
export default connect(null, mapDispatchToProps)(Book);
