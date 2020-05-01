import React, { useContext, useState } from 'react';
import s from './BookForm.module.scss';
import { ContextBook } from '../Context/ContextBook/ContextBook';

const BookForm = () => {
  const { addBook } = useContext(ContextBook);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
