import React from 'react';
import { Container, Image, Title, Body, Info, CardButton } from './styles';

const ContentCard = ({ children, image, ...restProps }) => (
    <Container {...restProps}>
        {image && <Image src={image} />}
        {children}
    </Container>
);

ContentCard.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

ContentCard.Body = ({ children, ...restProps }) => (
    <Body {...restProps}>{children}</Body>
);

ContentCard.Info = ({ children, ...restProps }) => (
    <Info {...restProps}>{children}</Info>
);

ContentCard.Button = ({ children, ...restProps }) => (
    <CardButton {...restProps}>{children}</CardButton>
);

export default ContentCard;
