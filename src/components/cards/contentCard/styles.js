import styled from 'styled-components';
import { Button } from '../../';

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
    display: grid;
    grid-template: 1em auto auto 100px 1em / 300px 1em auto auto 1em;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 725px) {
        grid-template: 1em auto auto 100px 1em / 200px 1em auto auto 1em;
    }

    @media (max-width: 600px) {
        grid-template: 200px 1em auto auto 100px 1em / 1em auto auto 1em;

        img {
            height: 200px;
            flex-basis: 200px;
            grid-row: 1;
            grid-column: 1/ -1;
        }

        h2 {
            font-size: 1.75rem;
            grid-row: 3;
            grid-column: 2/ -2;
        }

        p {
            font-size: 1rem;
            grid-row: 4;
            grid-column: 2/ -2;
        }

        small {
            grid-row: 5;
            grid-column: 2;
        }

        button {
            grid-row: 5;
            grid-column: 3;
        }
    }
`;

export const Image = styled.img`
    object-fit: cover;
    grid-row: 1/ -1;
    grid-column: 1;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 2.25rem;
    font-weight: 600;
    grid-row: 2;
    grid-column: 3/-2;
`;

export const Body = styled.p`
    font-size: 1.1rem;
    line-height: 1.2;
    grid-row: 3;
    grid-column: 3/-2;
`;

export const Info = styled.small`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.8;
    grid-row: 4;
    grid-column: 3;
    align-self: end;
    justify-self: start;
`;

export const CardButton = styled(Button)`
    grid-row: 4;
    grid-column: 4;
    justify-self: end;
    align-self: end;
`;
