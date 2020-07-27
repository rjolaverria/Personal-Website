import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = () => {
  const [current, setCurrent] = useState({
    home: false,
    about: false,
    projects: false,
    blog: false,
  });

  const location = window.location.pathname;

  useEffect(() => {
    Object.keys(current).forEach((k) => (current[k] = false));
    switch (location.substring(1)) {
      case 'about':
        setCurrent({ ...current, about: true });
        break;
      case 'projects':
        setCurrent({ ...current, projects: true });
        break;
      case 'blog':
        setCurrent({ ...current, blog: true });
        break;
      default:
        setCurrent({ ...current, home: true });
        break;
    }
  }, [location]);

  return (
    <Fragment>
      <nav className='side-nav'>
        <div className='nav-items'>
          <Link to='/' className={current.home ? 'active' : ''}>
            <i className='fas fa-home'></i>
          </Link>
          <Link to='about' className={current.about ? 'active' : ''}>
            <i className='far fa-address-card'></i>
          </Link>
          <Link to='projects' className={current.projects ? 'active' : ''}>
            <i className='fas fa-code-branch'></i>
          </Link>
          <Link to='blog' className={current.blog ? 'active' : ''}>
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
