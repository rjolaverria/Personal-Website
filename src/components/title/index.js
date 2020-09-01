import React from 'react';
import { H1, Underline, Container } from './styles';

const Title = ({ children, linePosition }) => (
    <Container>
        <H1>{children}</H1>
        <Underline linePosition={linePosition} />
    </Container>
);

export default Title;
