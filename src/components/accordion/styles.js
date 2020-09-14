import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    max-width: 600px;
`;

export const Item = styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
    margin-bottom: 1px;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid var(--light-color);
    background: var(--secondary-color);
    padding: 10px 20px;
`;

export const Body = styled.div`
    line-height: normal;
    background: var(--secondary-color);
    filter: brightness(150%);
    padding: ${({ active }) => (active ? '10px 20px' : '0px 20px')};
    font-size: ${({ active }) => (active ? '1rem' : 0)};
    height: ${({ active }) => (active ? 'auto' : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transition: padding 0.5s, visibility 0.5s;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
