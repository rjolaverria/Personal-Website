import styled from 'styled-components';

export const Div = styled.div`
    margin-left: 75px;
    padding: 2rem;

    & > div {
        margin: 0 auto;
        max-width: 1200px;
    }

    @media (max-width: 600px) {
        padding: 3rem 2rem 3rem 2rem;
        margin: 0 auto;
    }
`;
