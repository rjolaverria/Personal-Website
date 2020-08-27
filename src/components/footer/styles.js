import styled from 'styled-components';

export const Container = styled.footer`
    color: white;
    background-color: rgb(0, 122, 204);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;

    @media (max-width: 510px) {
        font-size: 0.7rem;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1rem;
`;

export const SocialLink = styled.a`
    display: none;

    @media (max-height: 567px) {
        display: block;
        color: white;
    }
`;

export const Info = styled.span`
    font-weight: 500;
    padding-right: 1rem;
`;
