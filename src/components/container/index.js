import React from 'react';
import { Div } from './styles';

const Container = ({ children, ...restProps }) => (
    <Div {...restProps}>
        <div>{children}</div>
    </Div>
);

export default Container;
