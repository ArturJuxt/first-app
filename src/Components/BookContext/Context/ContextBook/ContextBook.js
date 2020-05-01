import React, { createContext, useState } from 'react';

export const ContextBook = createContext();

const ContextBookProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Name of the vind', author: 'Patrick Rotfuss', id: 1 },
    { title: 'The final empoire', author: 'Brandon Sanderson', id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: 3 }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <ContextBook.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </ContextBook.Provider>
  );
};

export default ContextBookProvider;
