import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { BookContext } from '../Context/BookContext';
import './BookList.css';

function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ul }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
