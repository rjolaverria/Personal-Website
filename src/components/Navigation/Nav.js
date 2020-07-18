import React from 'react';
import './nav.css';
import logo from '../../logo.svg';

const Nav = () => {
  return (
    <nav>
      <div className='nav-items'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#blog'>Blog</a>
      </div>
    </nav>
  );
};

export default Nav;
