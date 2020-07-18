import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <nav className='side-nav'>
        <div className='nav-items'>
          <Link to='/' className='active'>
            <i className='fas fa-home'></i>
          </Link>
          <Link to='about'>
            <i className='fas fa-address-card'></i>
          </Link>
          <Link to='projects'>
            <i className='fas fa-project-diagram'></i>
          </Link>
          <Link to='blog'>
            <i className='fas fa-rss'></i>
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
      <nav className='bottom-nav'>
        <span>&copy; Olaverria Company LLC - 2020</span>
        <div className='social-bottom'>
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
    </Fragment>
  );
};

export default Nav;
