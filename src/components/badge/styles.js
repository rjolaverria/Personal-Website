import styled from 'styled-components';

export const Container = styled.span`
    display: inline;
    background-color: ${({ secondary, light }) =>
        secondary
            ? 'var(--secondary-color)'
            : light
            ? 'var(--light-color)'
            : 'var(--primary-color)'};
    color: ${({ light }) => (light ? 'var(--primary-color)' : '#fff')};
    border-radius: ${({ pill }) => (pill ? '50%' : '4px')};
    font-size: ${({ small, large }) =>
        small ? '.65rem' : large ? '1.2rem' : '1rem'};
    font-weight: 700;
    padding: 5px ${({ small }) => (small ? '6px' : '10px')};
`;
