import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background-color: var(--secondary-color);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 2px solid var(--light-color);
    font-size: 18px;

    h3 {
        margin: 0;
        padding-left: 20px;
    }

    span {
        opacity: 0;
        animation: appear 4s;
    }
    @keyframes appear {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const Button = styled.button`
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 18px;

    &:focus {
        outline: 0;
    }
`;
