import styled, { css } from 'styled-components';

const grid1 = css`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1em;

    & > img {
        object-fit: cover;
        width: 100%;
        height: auto;
    }
    
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

const grid2 = css`
    grid-gap: 10px;
    grid-template-columns: 10px;
    grid-auto-flow: column;
    grid-auto-columns: minmax(300px, 1fr);
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    scrollbar-width: none;


    &::-webkit-scrollbar {
        display: none;
    }



    &:before,
    &:after {
        content: '';
        width: 10px;
    }

    & > div {
        scroll-snap-align: center;
    }
`;
const grid3 = css``;

export const Container = styled.section`
    padding: 1.5rem 0;
    display: grid;
    ${({ grid }) =>
        grid === 1 ? grid1 : grid === 2 ? grid2 : grid === 3 ? grid3 : ''}

    
`;
