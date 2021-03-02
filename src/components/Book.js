import PropTypes from 'prop-types';

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
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
export default Book;
