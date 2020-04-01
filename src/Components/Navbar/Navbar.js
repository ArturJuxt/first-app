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
          Dialog
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
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
