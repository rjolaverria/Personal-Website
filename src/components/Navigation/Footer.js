import React from 'react';

const Footer = () => (
  <footer>
    <div>
      <span>&copy; Olaverria Co. LLC - 2020</span>
      <a
        className='footer-social'
        href='https://www.linkedin.com/in/RafiOlaverria'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin-in'></i>
      </a>
      <a
        className='footer-social'
        href='https://github.com/rjolaverria'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github-alt'></i>
      </a>
      <a className='footer-social' href='#resume'>
        <i className='fas fa-file'></i>
      </a>
      <span className='footer-info'>UTF-8</span>
      <span className='footer-info'>React.js</span>
      <span className='footer-info'>Prettier: &#10003;</span>
    </div>
  </footer>
);

export default Footer;
