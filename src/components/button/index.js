import React from 'react';
import { Container, Anchor} from './styles';

const Button = ({ children, to, href, ...restProps }) =>
     href || to ? (
        <Anchor
            href={href || to}
            {...restProps}
        >
            {children}
        </Anchor>
    ) : (
        <Container {...restProps}>{children}</Container>
    );

export default Button;
