import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer, Badge } from '../components';

const Navigation = () => {
    // Current page
    const current = useLocation().pathname;

    return (
        <>
            <Navbar>
                <Navbar.Items>
                    <Navbar.Tab to='/' active={current === '/' ? 'true' : ''}>
                        <i className='fas fa-home'></i>
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='about'
                        active={current === '/about' ? 'true' : ''}
                    >
                        <i className='far fa-address-card'></i>
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='projects'
                        active={current === '/projects' ? 'true' : ''}
                    >
                        <i
                            className='fas fa-code-branch'
                            style={{ padding: '0 0.37rem' }}
                        ></i>
                        <Badge pill small>
                            3
                        </Badge>
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='blog'
                        active={current === '/blog' ? 'true' : ''}
                    >
                        <i className='fa fa-newspaper-o' aria-hidden='true'></i>
                    </Navbar.Tab>
                </Navbar.Items>
                <Navbar.Social>
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
                </Navbar.Social>
            </Navbar>
            <Footer>
                <Footer.Items>&copy; Olaverria Co. LLC - 2020</Footer.Items>
                <Footer.Items>
                    <Footer.SocialLink
                        href='https://www.linkedin.com/in/RafiOlaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-linkedin-in'></i>
                    </Footer.SocialLink>
                    <Footer.SocialLink
                        href='https://github.com/rjolaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-github-alt'></i>
                    </Footer.SocialLink>
                    <Footer.SocialLink href='#resume'>
                        <i className='fas fa-file'></i>
                    </Footer.SocialLink>
                </Footer.Items>
                <Footer.Items>
                    <Footer.Info>UTF-8</Footer.Info>
                    <Footer.Info>React.js</Footer.Info>
                    <Footer.Info>Prettier: &#10003;</Footer.Info>
                </Footer.Items>
            </Footer>
        </>
    );
};

export default Navigation;
