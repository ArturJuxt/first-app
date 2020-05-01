import React, { useContext } from 'react';
import s from './BookList.module.scss';
import { ContextBook } from '../Context/ContextBook/ContextBook';
import BookDetalis from '../BookDetalis/BookDetalis';

const BookList = () => {
  const { books } = useContext(ContextBook);
  return books.length ? (
    <div className={s.booklist}>
      <ul>
        {books.map((book) => {
          return <BookDetalis book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className={s.empty}>No books read. Hello free time:)</div>
  );
};

export default BookList;
