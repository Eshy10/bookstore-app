import React from 'react';
import Book from '../components/Book';

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
          <Book />
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
