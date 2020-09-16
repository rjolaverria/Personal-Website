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
    grid-gap: 1em;
    grid-template: auto 1fr 2fr 1fr / minmax(200px, 300px) auto auto;
    grid-template-areas:
        'img ... ... ...'
        'img ttl ttl ...'
        'img bdy bdy ...'
        'img inf btn ...'
        'img ... ... ...';
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 600px) {
        grid-template: 200px 1fr 3fr 1fr / auto auto;
        grid-template-areas:
            'img img img img'
            '... ttl ttl ...'
            '... bdy bdy ...'
            '... inf btn ...'
            '... ... ... ...';
    }
`;

export const Image = styled.img`
    object-fit: cover;
    grid-area: img;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 2.25rem;
    font-weight: 600;
    grid-area: ttl;

    @media (max-width: 600px) {
        font-size: 1.75rem;
    }
`;

export const Body = styled.p`
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.2;
    grid-area: bdy;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Info = styled.small`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.8;
    grid-area: inf;
    align-self: end;
    justify-self: start;
`;

export const CardButton = styled(Button)`
    margin: 0;
    grid-area: btn;
    justify-self: end;
    align-self: end;
`;
