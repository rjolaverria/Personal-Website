import React from 'react';
import { Container, Items, SocialLink, Info } from './styles';

const Footer = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Footer.Items = ({ children, ...restProps }) => (
    <Items {...restProps}>{children}</Items>
);

Footer.SocialLink = ({ children, ...restProps }) => (
    <SocialLink {...restProps}>{children}</SocialLink>
);

Footer.Info = ({ children, ...restProps }) => (
    <Info {...restProps}>{children}</Info>
);

export default Footer;
