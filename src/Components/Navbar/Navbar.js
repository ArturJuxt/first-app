import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={s.navbar}>
      <div>
        <h1>Judo</h1>
      </div>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialog" activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          Counter
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/book" activeClassName={s.activeLink}>
          Book
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/bookcontext" activeClassName={s.activeLink}>
          BookContext
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
