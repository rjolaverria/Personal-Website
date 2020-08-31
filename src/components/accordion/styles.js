import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

export const Item = styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    user-select: none;
    width: 90%;
    margin-bottom: 1px;

    div {
        transition: max-height 0.5s cubic-bezier(0.5, 0, 0.1, 1);
    }

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
    width: 100%;
`;

export const Body = styled.div`
    line-height: normal;
    background: var(--secondary-color);
    filter: brightness(150%);
    padding: ${({ active }) => (active ? '10px 20px' : 0)};
    width: 100%;
    height: ${({ active }) => (active ? 'auto' : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
