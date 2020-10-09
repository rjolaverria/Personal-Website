import React from 'react';
import { Container } from '../components';
import styled from 'styled-components';

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 0;
        font-size: 4rem;
        color: var(--secondary-color);
    }

    div {
        margin-bottom: 0.7rem;
        display: flex;
    }

    h3,
    a {
        margin: 0;
        padding: 0 1rem;
        color: var(--primary-color);
    }

    h3 {
        font-size: 1.7rem;
    }

    img {
        filter: invert(80%);
        width: 30px;
        height: 30px;
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 3rem;
        }
        h3 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 2.3rem;
        }
        h3 {
            font-size: 1.3rem;
        }
    }
`;

const Home = () => {
    return (
        <Container>
            <Welcome>
                <h1>Rafi Joel Olaverria</h1>
                <div>
                    <h3>Front-End</h3>
                    <h3>AI</h3>
                    <h3>UX / UI</h3>
                </div>
                <div>
                    <a
                        href='https://www.linkedin.com/in/RafiOlaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='/icons/linkedin.svg' alt='' />
                    </a>
                    <a
                        href='https://github.com/rjolaverria'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='/icons/github.svg' alt='' />
                    </a>
                    <a href='#resume'>
                        <img src='/icons/resume.svg' alt='' />
                    </a>
                </div>
            </Welcome>
        </Container>
    );
};

export default Home;
