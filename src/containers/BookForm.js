import React from 'react';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title"> Title</label>
      {' '}
      <br />
      <input />
      {' '}
      <br />
      <label htmlFor="books">Choose a book:</label>
      {' '}
      <br />
      <select name="books">
        {categories.map(category => (
          <option value={category} key={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <br />
      <input type="submit" />
    </form>
  );
};

export default BookForm;
