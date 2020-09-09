import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../';
import {
    Container,
    TopContainer,
    Items,
    Social,
    Tab,
    MenuIcon,
} from './styles';
import { LockBody, ReleaseBody } from '../../global-styles';

const Navbar = () => {
    // Current page
    const current = useLocation().pathname;
    const [visible, setVisibility] = useState(false);

    return (
        <>
            <Container visible={visible}>
                <Items
                    onClick={() => {
                        setVisibility(!visible);
                    }}
                >
                    <Tab to='/' active={current === '/' ? 'true' : ''}>
                        <i className='fas fa-home'></i>
                    </Tab>
                    <Tab to='about' active={current === '/about' ? 'true' : ''}>
                        <i className='far fa-address-card'></i>
                    </Tab>
                    <Tab
                        to='projects'
                        active={current === '/projects' ? 'true' : ''}
                    >
                        <i
                            className='fas fa-code-branch'
                            style={{ padding: '0 0.37rem' }}
                        ></i>
                    </Tab>
                    <Tab to='blog' active={current === '/blog' ? 'true' : ''}>
                        <i className='fa fa-newspaper-o' aria-hidden='true'></i>
                    </Tab>
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
            <TopContainer visible={visible}>
                <MenuIcon
                    visible={visible}
                    onClick={() => setVisibility(!visible)}
                />
                {visible ? <LockBody /> : <ReleaseBody />}
            </TopContainer>
        </>
    );
};

export default Navbar;
