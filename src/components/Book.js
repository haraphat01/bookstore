import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th><button type="button" onClick={() => handleRemoveBook(id)}>Remove</button></th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
Book.propTypes = {
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
