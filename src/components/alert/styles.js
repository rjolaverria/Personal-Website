import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    ${({ bottom }) => (bottom ? 'bottom: 50px' : 'top: 30px')};
    ${({ left }) => (left ? 'left: 50px' : 'right: 50px')};
    z-index: 999;
    background-color: ${({ primary }) =>
        primary ? 'var(--primary-color)' : '#fff'};
    color: ${({ primary }) => (primary ? '#fff' : 'var(--secondary-color)')};
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.7);
    transform: translateX(${({ left }) => (left ? '-3000px' : '3000px')});
    animation: appear ${({ time }) => time}s;

    @keyframes appear {
        10% {
            transform: translateX(0px);
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        }
        20% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
        }
        30% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        }
        40% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
        }
        50% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        }
        60% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
        }
        70% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        }
        80% {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
        }
        90% {
            transform: translateX(0px);
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
        }
        100% {
            transform: translateX(
                ${({ left }) => (left ? '-3000px' : '3000px')}
            );
        }
    }
`;

export const Inner = styled.div`
    width: 300px;
    height: 50px;
    padding: 0.75rem;
    position: relative;

    @media (max-width: 500px) {
        width: 200px;
        height: 30px;
    }
`;

export const Message = styled.div`
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const Progress = styled.div`
    position: absolute;
    background-color: var(--primary-color);
    height: 8px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${({ primary }) =>
        primary ? '#fff' : 'var(--primary-color)'};
    animation: timer ${({ time }) => time}s;

    @keyframes timer {
        to {
            width: 0;
        }
    }
`;

export const Close = styled.div`
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 15px;
        right: 15px;
        width: 15px;
        height: 5px;
        background: var(--primary-color);
        transform: rotate(135deg);
    }

    &:after {
        transform: rotate(45deg);
    }
`;
