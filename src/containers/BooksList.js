import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
  const rowHead = ['ID', 'Title', 'Category'];
  return (
    <div>
      <table>
        <thead>
          {
         rowHead.map((heading, index) => (
           // eslint-disable-next-line react/no-array-index-key
           <th key={index}>{heading}</th>
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
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
