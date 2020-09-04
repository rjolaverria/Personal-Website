import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem auto;
    padding-left: 20px;

    ${({ primary, secondary }) =>
        primary
            ? 'border-left: 10px solid var(--primary-color)'
            : secondary
            ? 'border-left: 10px solid rgba(0, 122, 204, 0.2)'
            : 'border-left: 10px solid #fff'};

    &:hover {
        ${({ primary, secondary }) =>
            primary
                ? 'border-left: 10px solid var(--primary-color)'
                : secondary
                ? 'border-left: 10px solid rgba(0, 122, 204, 0.2)'
                : 'border-left: 10px solid var(--light-color)'};
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
`;

export const SubTitle = styled.h4`
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--secondary-color);
`;

export const Content = styled.div`
    color: var(--secondary-color);
    font-size: 1.2rem;
    padding-bottom: 16px;
    font-weight: 500;
`;

export const Split = styled.div`
    display: flex;

    & > div {
        margin: 0 1rem;
    }

    @media (max-width: 875px) {
        flex-direction: column;
    }
`;
