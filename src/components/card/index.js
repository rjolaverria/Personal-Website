import React from 'react';
import { Container, Image, Content, Title, Text } from './styles';

const Card = ({ children, image, ...restProps }) => (
    <Container {...restProps}>
        <Image src={image} />
        <Content>{children}</Content>
    </Container>
);

Card.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Card.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

export default Card;
