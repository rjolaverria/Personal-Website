import styled from 'styled-components';

export const Container = styled.div`
    width: ${({ big }) => (big ? '200px' : '100px')};
    height: ${({ big }) => (big ? '320px' : '160px')};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.5s;
    margin: 4px;

    a {
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.1);
        z-index: 99;
    }
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;

export const Content = styled.div`
    width: ${({ big }) => (big ? '200px' : '100px')};
    height: ${({ big }) => (big ? '320px' : '160px')};
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
