import styled, { css } from 'styled-components';

export const Container = styled.a`
    display: grid;
    text-decoration: none;
    grid-row: ${({ showcase }) => (showcase ? 'span 2' : 'span 1')};
    grid-column: ${({ showcase }) => (showcase ? '1/3' : 'span 1')};
    grid-template-columns: repeat(20, 5%);
    width: ${({ showcase }) => (showcase ? '220px' : '110px')};
    height: ${({ showcase }) => (showcase ? '340px' : '170px')};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
        z-index: 99;
    }
`;

const bookStyle = css`
    grid-column: 1/ -1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
`;

export const Crease = styled.div`
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        0.25turn,
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1),
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1)
    );
`;

export const Image = styled.img`
    ${bookStyle};
    object-fit: fill;
`;

export const Content = styled.div`
    ${bookStyle};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.6rem;
    background-color: #0000008f;
    color: #fff;

    ${({ big }) => (big ? 'h5{font-size:1.75rem}' : '')};
    ${({ big }) => (big ? 'h6{font-size:1rem}' : '')};
`;

export const Title = styled.h5`
    font-size: 0.8rem;
    margin: 0;
    padding: 0 0 0.5rem 0;
`;
export const Author = styled.h6`
    margin: 0;
    padding: 0;
`;

export const Shelf = styled.div`
    max-width: 700px;
    display: grid;
    grid-template: repeat(3, auto) / repeat(auto-fill, 110px);
    grid-gap: 0.5rem;
`;

export const ShelfTitle = styled.h2`
    font-size: 2rem;
    margin-top: 0;
    color: var(--secondary-color);
    grid-column: 1 /-1;
    grid-row: 1;
`;

export const ShelfSubTitle = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    grid-column: 1/-1;
    color: #575757;

    @media (min-width: 600px) {
        grid-column: span 2;
        grid-row: 2;
        margin-top: 0;
    }
`;
