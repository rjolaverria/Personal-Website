import React from 'react';
import { Div } from './styles';

const Container = ({ children, ...restProps }) => (
    <Div {...restProps}>{children}</Div>
);

export default Container;
