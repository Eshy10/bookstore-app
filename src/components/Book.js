import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="table_row">
    <div className="book_details">
      <div className="table-book-info">
        <td className="table-book-category">{book.category}</td>
        <td className="table-book-title">{book.title}</td>
        <td className="table-book-id">
          ID:
          {' '}
          {book.id}
        </td>
      </div>
      <div className="table-book-options">
        <span>Comments</span>
        <span className="span-element">|</span>
        <td className="span-element"><button type="button" onClick={() => handleRemoveBook(book)}>Remove</button></td>
        <span className="span-element">|</span>
        <span className="span-element">Edit</span>
      </div>
    </div>
    <div className="books_completed">
      {/* <RadioButtonUncheckedIcon className="Oval-2" /> */}
      <div className="Oval-2" />
      <div className="percentage">
        <span>94%</span>
        <span>Completed</span>
      </div>
    </div>
    <span className="line" />
    <div className="book-progress">
      <span className="book-progress-chapter">CURRENT CHAPTER</span>
      <span className="book-progress-title">Chapter 13</span>
      <button type="button" className="book-progress-button">UPDATE PROGRESS</button>
    </div>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
