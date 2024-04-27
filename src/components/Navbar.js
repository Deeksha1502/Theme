import { Link } from 'react-router-dom';
import { useTheme } from '../theme-context';
import React from 'react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <nav className='navbar'>
      <div>
        <Link to='/'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/blog'> Blog</Link>
      </div>

      <div className='mode-switch'>
        <label>
          <input type='checkbox' onChange={toggleMode} checked={theme === 'dark'}></input>
          <span className='slider round'></span>
        </label>
      </div>
    </nav>
  );
};
