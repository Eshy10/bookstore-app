import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Book from '../components/Book';

const BookList = ({ books }) => {
  const rowHead = ['ID', 'Title', 'Category'];
  return (
    <div>
      <table>
        <thead>
          {
         rowHead.map(heading => (
           <th key={uuid()}>{heading}</th>
         ))
}
        </thead>
        <tbody>
          {
          books.map(book => (
            <Book key={book.id} book={book} />
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
