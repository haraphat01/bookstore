import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <article className="book">
      <div className="bookInfo">
        <div className="catTitAuth">
          <p>{category}</p>
          <h2>{title}</h2>
          <h4>Author</h4>
        </div>
        <div className="bookBtns">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleRemoveBook(id)}>Remove</button>
          <button type="button">Edit</button>
        </div>

        <div className="progress">
          <div className="circle" />

        </div>
      </div>

    </article>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
Book.propTypes = {
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
