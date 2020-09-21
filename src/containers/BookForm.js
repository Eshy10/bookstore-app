import React from 'react';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        {' '}
        Title
        <input id="title" name="title" />
      </label>
      <br />
      <br />
      <label htmlFor="books">
        Choose a book:
        <br />
        <select name="books">
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default BookForm;
