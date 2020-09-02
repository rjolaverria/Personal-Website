import styled from 'styled-components';

export const Container = styled.div`
    max-width: 305px;
    display: flex;
    position: relative;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.5s;
    margin: 4px;

    &:hover {
        transform: scale(1.1);
        z-index: 99;
    }

    @media (min-width: 1000px) {
        &:hover p {
            display: block;
        }
    }
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

export const Content = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    bottom: 0;
    padding: 0.625rem;
    background-color: #0000008f;
    width: 100%;
`;

export const Title = styled.h4`
    font-size: 1rem;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 0.75rem;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;
