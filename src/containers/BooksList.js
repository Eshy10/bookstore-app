import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

import { removeBook, filterBook } from '../actions/index';

const BookList = ({
  books, removeBook, filterBook, filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = e => {
    const category = e.target.value;
    filterBook(category);
  };
  const rowHead = ['ID', 'Title', 'Category'];
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
          books.filter(book => (filter === 'All' ? books : book.category === filter))
            .map(book => (
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
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  filterBook: category => {
    dispatch(filterBook(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
