import React from 'react';
import { Main } from './styles';

const Container = ({ children, ...restProps }) => (
    <Main {...restProps}>{children}</Main>
);

export default Container;
