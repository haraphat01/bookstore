import React, { useState } from 'react';

const BooksForm = () => {
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

export default BooksForm;
