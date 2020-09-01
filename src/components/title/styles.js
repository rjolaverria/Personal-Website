import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
`;
export const H1 = styled.h1`
    font-size: 3rem;
    color: var(--secondary-color);
    margin: 0;
`;

export const Underline = styled.hr`
    border: 0;
    height: 5px;
    background-color: var(--primary-color);
    width: ${({ linePosition }) =>
        linePosition === 'center' ? '166px' : '66px'};
    ${({ linePosition }) =>
        linePosition === 'center'
            ? ''
            : linePosition === 'right'
            ? 'margin-right: 0px'
            : 'margin-left: 0px'};
    animation: x 1s ease-in-out;

    @keyframes x {
        0% {
            width: 66px;
        }
        50% {
            width: 0px;
        }
        100% {
            width: 66px;
        }
    }
`;
