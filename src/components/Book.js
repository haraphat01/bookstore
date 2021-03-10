import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, name, category } = book;
  const names = ['William Shakespeare', 'Emily Dickinson', 'Arthur Conan Doyle', 'Leo Tolstoy', 'Edgar Allan Poe', 'Robert Ervin Howard'];
  const authors = arr => names[Math.floor(Math.random() * arr.length)];
  const randomNumber = Math.floor(Math.random() * 100);
  return (
    <article className="book">

      <div className="catTitAuth">

        <div className="catTitAuth">
          <p>{category}</p>
          <h2>{name}</h2>
          <h4>{authors(names)}</h4>
        </div>

        <div className="bookBtns">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleRemoveBook(id)}>Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>
      <div className="progress">

        <CircularProgress variant="determinate" value={randomNumber} />

        <div className="percentage">

          <h2>
            {' '}
            {`${randomNumber} `}
            %
          </h2>

          <p>Completed</p>
        </div>

      </div>
      <div className="lastElement">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="chapternr">
          Chapter
          {randomNumber}
        </p>
        <button className="updatepBtn" type="button">UPDATE PROGRESS</button>
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
