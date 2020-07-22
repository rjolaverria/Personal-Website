import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
  useEffect(() => {
    props.history.listen(() => console.log(window.location.pathname));
  }, [props.history]);

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
        <a
          className='social-bottom'
          href='https://www.linkedin.com/in/RafiOlaverria'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          className='social-bottom'
          href='https://github.com/rjolaverria'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt'></i>
        </a>
        <a className='social-bottom' href='#resume'>
          <i className='fas fa-file'></i>
        </a>
        <span className='bottom-info'>UTF-8</span>
        <span className='bottom-info'>React.js</span>
        <span className='bottom-info'>Prettier: &#10003;</span>
      </nav>
    </Fragment>
  );
};

export default withRouter(Nav);
