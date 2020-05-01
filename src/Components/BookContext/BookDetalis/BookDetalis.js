/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import s from './BookDetalis.module.scss';
import { ContextBook } from '../Context/ContextBook/ContextBook';

const BookDetalis = ({ book }) => {
  const { removeBook } = useContext(ContextBook);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className={s.title}>{book.title}</div>
      <div className={s.author}>{book.author}</div>
    </li>
  );
};

export default BookDetalis;
