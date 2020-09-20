import React from 'react';
import { Container, Squares } from './styles';

const Loading = ({ dots }) => {
    return (
        <Container>
            <Squares>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Squares>
        </Container>
    );
};

export default Loading;
