import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions ';

const BooksForm = props => {
  const { addBook } = props;

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [catValue, setCatValue] = useState('');

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setCatValue(e.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const obj = { title, category: catValue };
    addBook(obj);
  };

  return (
    <form onSubmit={handleSubmit} name="form">

      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        onChange={e => handleChange(e)}
        value={title}

      />
      <select onChange={e => handleChange(e)}>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
      <h4>{title}</h4>
      <h2>{catValue}</h2>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addBook: obj => {
    dispatch(addBook(obj));
  },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(BooksForm);
