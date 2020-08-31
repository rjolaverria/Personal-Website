import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.nav`
    color: var(--light-color);
    background-color: var(--secondary-color);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    z-index: 1;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    a {
        color: var(--light-color);
        display: block;
        font-size: 2rem;
        text-decoration: none;
        padding: 0.75rem 0.5rem;
    }

    a:hover {
        color: white;
    }
`;

export const Tab = styled(RouterLink)`
    border-left: 3px solid var(--secondary-color);
    ${({ active }) => active && `border-left: 3px solid white;`}
    transition: border 1s;
`;

export const Social = styled(Items)`
    @media (max-height: 567px) {
        display: none;
    }
`;
