import React from 'react';
import s from './BookContext.module.scss';
import ContextBookProvider from './Context/ContextBook/ContextBook';
import Navbar from './Navbar/Navbar';
import BookList from './BookList/BookList';
import BookForm from './BookForm/BookForm';

const BookContext = () => {
  return (
    <div className={s.App}>
      <ContextBookProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </ContextBookProvider>
    </div>
  );
};

export default BookContext;
