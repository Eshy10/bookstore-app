import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Book from '../components/Book';

import { removeBook } from '../actions/index';

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const rowHead = ['ID', 'Title', 'Category'];
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
         rowHead.map(heading => (
           <th key={uuid()}>{heading}</th>
         ))
}
          </tr>
        </thead>
        <tbody>
          {
          books.map(book => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
