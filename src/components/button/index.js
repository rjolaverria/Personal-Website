import React from 'react';
import { Container, Anchor, Link } from './styles';

const Button = ({ children, to, href, ...restProps }) =>
    to ? (
        <Link to={to} {...restProps}>
            {children}
        </Link>
    ) : href ? (
        <Anchor
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            {...restProps}
        >
            {children}
        </Anchor>
    ) : (
        <Container {...restProps}>{children}</Container>
    );

export default Button;
