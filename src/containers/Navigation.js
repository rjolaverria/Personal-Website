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
                        <img src='/icons/home.svg' alt='Home' />
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='about'
                        active={current === '/about' ? 'true' : ''}
                    >
                        <img src='/icons/about.svg' alt='About Me' />
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='projects'
                        active={current === '/projects' ? 'true' : ''}
                    >
                        <img src='/icons/projects.svg' alt='Projects' />
                        <Badge pill small>
                            3
                        </Badge>
                    </Navbar.Tab>
                    <Navbar.Tab
                        to='blog'
                        active={current === '/blog' ? 'true' : ''}
                    >
                        <img src='/icons/blog.svg' alt='Projects' />
                    </Navbar.Tab>
                </Navbar.Items>
                <Navbar.Social>
                    <a
                        href='https://www.linkedin.com/in/RafiOlaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='/icons/linkedin.svg' alt='' />
                    </a>
                    <a
                        href='https://github.com/rjolaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='/icons/github.svg' alt='' />
                    </a>
                    <a href='#resume'>
                        <img src='/icons/resume.svg' alt='' />
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
