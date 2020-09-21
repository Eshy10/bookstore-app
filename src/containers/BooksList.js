import React from 'react';
import Book from '../components/Book';

const book = {
  id: 1,
  title: 'Title',
  category: 'Category',
};
const BookList = () => {
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
          <Book book={book} />
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
