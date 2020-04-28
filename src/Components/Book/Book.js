import React from 'react';
import Navbar from './Navbar/Navbar';
import BookList from './BookList/BookList';
import ThemeContextProvider from './Context/ThemeContext';

function Book() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />;
        <BookList />;
      </ThemeContextProvider>
    </div>
  );
}

export default Book;
