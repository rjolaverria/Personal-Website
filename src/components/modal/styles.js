import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
`;

export const Inner = styled.div`
    position: absolute;
    background-color: #fff;
    max-width: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
    color: #000;

    @media (max-width: 700px) {
        max-width: 200px;
    }
`;

export const Content = styled.div`
    margin-bottom: 16px;
`;

export const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 16px;
`;

export const Close = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    opacity: 1;
    background-color: transparent;
    border: 0;
    transition: transform 0.5s;
    cursor: pointer;

    &:active {
        outline: none;
    }

    &:before,
    &:after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 20px;
        width: 3px;
        background-color: #000;
        transform: rotate(-45deg);
    }

    &:after {
        transform: rotate(45deg);
    }

    &:hover {
        transform: scale(1.1);
    }
`;
