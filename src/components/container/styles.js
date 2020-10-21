import styled from 'styled-components';

export const Div = styled.div`
    margin-left: 58px;
    padding: 2rem;

    & > div {
        margin: 0 auto;
        max-width: 1000px;
    }

    @media (max-width: 600px) {
        padding: 3rem 1rem;
        margin: 0 auto;
    }
`;
