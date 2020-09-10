import React from 'react';
import { Container, Image, Content, Title, Body, Footer, Info } from './styles';

const ContentCard = ({ children, image, ...restProps }) => (
    <Container {...restProps}>
        {image && <Image src={image} />}
        <Content>{children}</Content>
    </Container>
);

ContentCard.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

ContentCard.Body = ({ children, ...restProps }) => (
    <Body {...restProps}>{children}</Body>
);

ContentCard.Footer = ({ children, ...restProps }) => (
    <Footer {...restProps}>{children}</Footer>
);

ContentCard.Info = ({ children, ...restProps }) => (
    <Info {...restProps}>{children}</Info>
);

export default ContentCard;
