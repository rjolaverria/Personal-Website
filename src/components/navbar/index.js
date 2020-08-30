import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Items, Social, Link } from './styles';

const Navbar = () => {
    // Current page
    const current = useLocation().pathname;

    return (
        <Container>
            <Items>
                <Link to='/' active={current === '/'}>
                    <i className='fas fa-home'></i>
                </Link>
                <Link to='about' active={current === '/about'}>
                    <i className='far fa-address-card'></i>
                </Link>
                <Link to='projects' active={current === '/projects'}>
                    <i
                        className='fas fa-code-branch'
                        style={{ padding: '0 0.37rem' }}
                    ></i>
                </Link>
                <Link to='blog' active={current === '/blog'}>
                    <i className='fa fa-newspaper-o' aria-hidden='true'></i>
                </Link>
            </Items>
            <Social>
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
            </Social>
        </Container>
    );
};

export default Navbar;
