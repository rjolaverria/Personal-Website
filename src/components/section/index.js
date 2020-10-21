import React from 'react';
import { Container } from './styles';

const Section = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};

export default Section;
