import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
`;

export const Squares = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & > div {
        position: absolute;
        top: 33%;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    & > div:nth-child(1) {
        left: 8px;
        animation: one 0.6s infinite;
    }

    & > div:nth-child(2) {
        left: 8px;
        animation: two 0.6s infinite;
    }

    & > div:nth-child(3) {
        left: 32px;
        animation: two 0.6s infinite;
    }

    & > div:nth-child(4) {
        left: 56px;
        animation: three 0.6s infinite;
    }

    @keyframes one {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes two {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }

    @keyframes three {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
`;
