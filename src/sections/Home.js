import React from 'react';
import { Button } from '../components';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: lightgrey;
    height: 100vh;

    h1 {
        margin: 0;
        font-size: 6rem;
        color: white;
    }

    .section {
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .next {
        margin-bottom: 3rem;
    }

    div {
        margin-bottom: 0.85rem;
        display: flex;
    }

    h3,
    a {
        margin: 0 1rem;
    }

    h3 {
        font-size: 1.7rem;
        color: var(--primary-color);
    }

    img {
        filter: invert(80%);
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1015px) {
        h1 {
            font-size: 4rem;
        }
        h3 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 700px) {
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
        <Container id='welcome'>
            <div className='section'>
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
            </div>

            <div className='next'>
                <Button to='#about' primary>
                    About Me
                </Button>
            </div>
        </Container>
    );
};

export default Home;
