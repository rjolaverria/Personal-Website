import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: ${({ big }) => (big ? '200px' : '100px')};
    height: ${({ big }) => (big ? '320px' : '160px')};
    border-radius: 2px;
    display: grid;
    grid-template-columns: repeat(20, 5%);
    cursor: pointer;
    transition: transform 0.5s;
    margin: 4px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);

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
        rgba(0, 0, 0, 0.2),
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.2),
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
    padding: 0.625rem;
    background-color: #0000008f;
    color: #fff;

    ${({ big }) => (big ? 'h5{font-size:1.75rem}' : '')};
    ${({ big }) => (big ? 'h6{font-size:1rem}' : '')};
`;

export const Title = styled.h5`
    margin: 0;
    padding: 0 0 0.5rem 0;
`;
export const Author = styled.h6`
    margin: 0;
    padding: 0;
`;

export const Shelf = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
