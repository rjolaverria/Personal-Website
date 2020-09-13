import React from 'react';
import { Container, Title, SubTitle, Content, Section } from './styles';

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

Block.Section = ({ children, ...restProps }) => (
    <Section {...restProps}>{children}</Section>
);
export default Block;
