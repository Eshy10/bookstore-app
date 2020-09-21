import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <tr>
      {book.id}
      {book.title}
      {book.category}
    </tr>
  </div>
);

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
