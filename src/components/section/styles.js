import styled, { css } from 'styled-components';

const grid1 = css`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1em;

    & > img {
        object-fit: cover;
        width: 100%;
        height: auto;
    }
`;

const grid2 = css``;
const grid3 = css``;

export const Container = styled.section`
    margin-top: 1.5rem;
    display: grid;
    ${({ grid }) =>
        grid === 1 ? grid1 : grid === 2 ? grid2 : grid === 3 ? grid3 : ''}

    @media (max-width: 700px) {
        grid-template-columns: 1fr;

        & > div {
            grid-column: 1;
        }
        & > img {
            grid-column: 1;
        }
    }
`;
