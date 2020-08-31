import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Button = ({ children, to, href, ...restProps }) => (
    <Container {...restProps}>
        {to ? (
            <Link to={to}>{children}</Link>
        ) : href ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>
                {children}
            </a>
        ) : (
            children
        )}
    </Container>
);

export default Button;
