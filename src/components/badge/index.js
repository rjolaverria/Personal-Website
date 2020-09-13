import React from 'react';
import { Container } from './styles';

const Badge = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

export default Badge;
