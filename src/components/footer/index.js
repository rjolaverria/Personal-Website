import React from 'react';
import { Container, Items, SocialLink, Info } from './styles';

const Footer = () => (
    <Container>
        <Items>
            &copy; Olaverria Co. LLC - 2020
            <SocialLink
                href='https://www.linkedin.com/in/RafiOlaverria'
                target='_blank'
                rel='noopener noreferrer'
            >
                <i className='fab fa-linkedin-in'></i>
            </SocialLink>
            <SocialLink
                href='https://github.com/rjolaverria'
                target='_blank'
                rel='noopener noreferrer'
            >
                <i className='fab fa-github-alt'></i>
            </SocialLink>
            <SocialLink href='#resume'>
                <i className='fas fa-file'></i>
            </SocialLink>
            <Info>UTF-8</Info>
            <Info>React.js</Info>
            <Info>Prettier: &#10003;</Info>
        </Items>
    </Container>
);

export default Footer;
