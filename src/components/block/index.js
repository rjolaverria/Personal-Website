import React from 'react';
import { Container, Title, SubTitle, Content } from './styles';

const Block = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Block.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Block.SubTitle = ({ children, ...restProps }) => (
    <SubTitle {...restProps}>{children}</SubTitle>
);

Block.Content = ({ children, ...restProps }) => (
    <Content {...restProps}>{children}</Content>
);

export default Block;
