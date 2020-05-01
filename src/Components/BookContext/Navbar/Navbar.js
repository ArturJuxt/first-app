import React, { useContext } from 'react';
import s from './Navbar.module.scss';
import { ContextBook } from '../Context/ContextBook/ContextBook';

const Navbar = () => {
  const { books } = useContext(ContextBook);
  return (
    <div className={s.navbar}>
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through... </p>
    </div>
  );
};

export default Navbar;
