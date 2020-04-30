import React from 'react';
import './Book.css';
import Navbar from './Navbar/Navbar';
import BookList from './BookList/BookList';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';
import ThemeToggle from './BookList/ThemeToggle/ThemeToggle';
import BookContextProvider from './Context/BookContext';

function Book() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default Book;
