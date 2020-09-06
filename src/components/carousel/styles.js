import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    position: relative;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
`;

export const Item = styled.div`
    display: ${({ active }) => (active ? 'flex' : 'none')};
    animation: appear 1s;

    @keyframes appear {
        from {
            opacity: 0;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
`;

export const Status = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    transform: translateY(-30%);

    @media (max-width: 426px) {
        transform: translateY(-10%);
    }
`;

export const Indicator = styled.button`
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: ${({ active }) => (active ? '1' : 0.5)};
    margin: 0.2rem;
`;

export const Actions = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const Previous = styled.button`
    box-sizing: border-box;
    background-color: transparent;
    opacity: 0.5;
    border-style: solid;
    outline: 0;
    cursor: pointer;
    transition: all 0.3s;
    border-width: 30px 30px 30px 0;
    border-color: transparent #fff transparent transparent;

    &:active {
        outline: none;
    }
    &:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }

    @media (max-width: 650px) {
        transform: scale(0.7);
    }
`;

export const Next = styled(Previous)`
    border-width: 30px 0 30px 30px;
    border-color: transparent transparent transparent #fff;
`;
