import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.nav`
    color: var(--light-color);
    background-color: var(--secondary-color);
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    width: 60px;
    grid-template: 2fr 1fr / auto;
    height: 100%;
    z-index: 2;
    transition: all 0.6s;

    @media (max-width: 600px) {
        transform: ${({ visible }) => (visible ? '' : 'translateX(-300px)')};
        ${({ visible }) =>
            visible ? 'box-shadow: 5px 0 5px 0 rgba(0,0,0,0.2)' : ''};
    }
`;

export const Mobile = styled.div`
    display: none;
    @media (max-width: 600px) {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 50px;
        display: flex;
        padding: 1rem;
        justify-content: flex-end;
        color: #fff;
        z-index: 1;
        ${({ visible }) => (visible ? 'width: 100%' : '')};
        ${({ visible }) => (visible ? 'height: 100%' : '')};
        ${({ visible }) =>
            visible ? 'background-color: rgba(0,0,0,0.4)' : ''};
    }
`;

export const ToggleMobile = styled.div`
    margin-top: 5px;
    width: 30px;
    height: 5px;
    background-color: var(--primary-color);
    position: relative;
    transition: all 0.5s ease;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
    ${({ visible }) => (visible ? 'transform: rotate(43deg)' : '')};
    ${({ visible }) => (visible ? 'background-color: #fff' : '')};

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: -10px;
        width: 80%;
        height: 5px;
        background: inherit;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
        transition: all 0.5s ease;
    }

    &:after {
        top: 10px;
        width: 60%;
    }

    &:before,
    &:after {
        ${({ visible }) => (visible ? 'background-color: #fff' : '')};
        ${({ visible }) => (visible ? 'transform: rotate(95deg)' : '')};
        ${({ visible }) => (visible ? 'top: 0' : '')};
        ${({ visible }) => (visible ? 'width: 100%' : '')};
        ${({ visible }) => (visible ? 'box-shadow: none' : '')};
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
`;

export const Tab = styled(RouterLink)`
    color: ${({ active }) => (active ? '#fff' : 'var(--light-color)')};
    display: grid;
    grid-gap: 8px;
    grid-template: repeat(3, auto) / repeat(3, auto);
    font-size: 2rem;
    text-decoration: none;
    padding: 0.75rem 0.5rem;
    border-left: 3px solid var(--secondary-color);
    ${({ active }) => active && `border-left: 3px solid white;`}
    transition: border 1s;
    position: relative;

    &:hover {
        color: white;
    }

    & > i,
    & > img {
        grid-row: 1 / -1;
        grid-column: 1/-1;
        width: 100%;
    }

    & > span {
        grid-row: 3;
        grid-column: 3;
    }
`;

export const Social = styled(Items)`
    align-items: center;
    padding-bottom: 2rem;
    a {
        color: var(--light-color);
        display: block;
        font-size: 2rem;
        text-decoration: none;
        padding: 0.75rem 0.5rem;
    }
    img {
        width: 100%;
    }
    @media (max-height: 567px) {
        display: none;
    }
`;
