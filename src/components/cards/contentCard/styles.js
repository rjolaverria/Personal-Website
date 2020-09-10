import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background-color: ${({ primary, secondary, light }) =>
        primary
            ? 'var(--primary-color)'
            : secondary
            ? 'var(--secondary-color)'
            : light
            ? 'var(--light-color)'
            : '#fff'};
    color: ${({ primary, secondary }) =>
        primary || secondary ? '#fff' : 'var(--secondary-color)'};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 600px) {
        flex-direction: column;

        img {
            height: 200px;
            flex-basis: 200px;
        }

        h2 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export const Image = styled.img`
    object-fit: cover;
    flex-basis: 400px;
    height: 300px;
    min-width: 0;
    min-height: 0;
`;

export const Content = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    margin-top: 0;
`;

export const Body = styled.p`
    font-size: 1.1rem;
    margin-top: 0;
    line-height: 1.2;
`;

export const Footer = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.small`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.8;
`;
