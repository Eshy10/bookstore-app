import React from 'react';
import '../App.css';

import NavBar from './NavBar';
import BookList from '../containers/BooksList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="Bookstore-CMS">
      <NavBar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
