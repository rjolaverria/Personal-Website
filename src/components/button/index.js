import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Button = ({ children, to, href, ...restProps }) =>
    to ? (
        <Link to={to}>
            <Container {...restProps}>{children}</Container>
        </Link>
    ) : href ? (
        <a href={href} target='_blank' rel='noopener noreferrer'>
            <Container {...restProps}>{children}</Container>
        </a>
    ) : (
        <Container {...restProps}>{children}</Container>
    );

export default Button;
