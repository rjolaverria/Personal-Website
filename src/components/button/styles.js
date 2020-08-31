import styled from 'styled-components';

export const Container = styled.button`
    display: inline-block;
    color: ${({ primary, secondary }) =>
        primary || secondary ? '#fff' : 'var(--primary-color)'};
    background-color: ${({ primary, secondary }) =>
        primary ? '#0066B8' : secondary ? 'var(--secondary-color)' : '#fff'};
    border: none;
    ${({ border, primary, secondary }) =>
        border && primary
            ? 'border: 3px solid var(--secondary-color)'
            : border
            ? 'border: 3px solid var(--primary-color)'
            : ''};
    padding: 0.5rem 0.875rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin: 4px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
    transition: 1s all;

    &:hover {
        ${({ primary, secondary }) =>
            primary || secondary ? 'opacity: 0.8' : 'filter: brightness(90%)'};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
