import styled from 'styled-components';

export const Container = styled.div`
    width: 100px;
    height: 160px;
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
    box-sizing: border-box;
    width: 100px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.625rem;
    background-color: #0000008f;
    color: #fff;
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
