import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Current page
  const current = useLocation().pathname;

  return (
    <nav>
      <div className='nav-items'>
        <Link to='/' className={current === '/' ? 'active' : ''}>
          <i className='fas fa-home'></i>
        </Link>
        <Link to='about' className={current === '/about' ? 'active' : ''}>
          <i className='far fa-address-card'></i>
        </Link>
        <Link to='projects' className={current === '/projects' ? 'active' : ''}>
          <i className='fas fa-code-branch'></i>
        </Link>
        <Link to='blog' className={current === '/blog' ? 'active' : ''}>
          <i className='fa fa-newspaper-o' aria-hidden='true'></i>
        </Link>
      </div>
      <div className='nav-items social'>
        <a
          href='https://www.linkedin.com/in/RafiOlaverria'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          href='https://github.com/rjolaverria'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt'></i>
        </a>
        <a href='#resume'>
          <i className='fas fa-file'></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
