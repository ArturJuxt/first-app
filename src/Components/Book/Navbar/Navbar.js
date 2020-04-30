import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ul, color: theme.syntax }}>
      <h1>Context App</h1>
      <div role="button" onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
