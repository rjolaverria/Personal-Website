import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Container, Items, Social, Link } from './styles';

const Navbar = () => {
    // Current page
    const current = useLocation().pathname;

    return (
        <Container>
            <Items>
                <RouterLink to='/' className={current === '/' ? 'active' : ''}>
                    <i className='fas fa-home'></i>
                </RouterLink>
                <RouterLink
                    to='about'
                    className={current === '/about' ? 'active' : ''}
                >
                    <i className='far fa-address-card'></i>
                </RouterLink>
                <RouterLink
                    to='projects'
                    className={current === '/projects' ? 'active' : ''}
                >
                    <i className='fas fa-code-branch'></i>
                </RouterLink>
                <RouterLink
                    to='blog'
                    className={current === '/blog' ? 'active' : ''}
                >
                    <i className='fa fa-newspaper-o' aria-hidden='true'></i>
                </RouterLink>
            </Items>
            <Social>
                <Link
                    href='https://www.linkedin.com/in/RafiOlaverria'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i className='fab fa-linkedin-in'></i>
                </Link>
                <Link
                    href='https://github.com/rjolaverria'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i className='fab fa-github-alt'></i>
                </Link>
                <Link href='#resume'>
                    <i className='fas fa-file'></i>
                </Link>
            </Social>
        </Container>
    );
};

export default Navbar;
