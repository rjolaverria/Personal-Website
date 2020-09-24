import styled from 'styled-components';

export const Container = styled.footer`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    color: white;
    font-size: 0.9rem;
    background-color: var(--primary-color);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    @media (max-width: 565px) {
        font-size: 0.7rem;
    }

    @media (min-height: 567px) {
        grid-template-columns: 10fr 0fr 10fr;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 1rem;

    &:nth-of-type(3) {
        justify-content: space-evenly;
    }
    img {
        width: 15px;
    }
`;

export const SocialLink = styled.a`
    display: none;

    @media (max-height: 567px) {
        display: block;
    }
`;

export const Info = styled.span`
    img {
        width: 12px;
        vertical-align: baseline;
    }
`;
