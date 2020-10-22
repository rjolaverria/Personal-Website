import React, { useContext } from 'react';
import { Container, Section, Title, Card } from '../components';
import { AppContext } from '../context/AppContext';


const Projects = () => {
    const { repos } = useContext(AppContext);
    let i = 1;
    return (
        <Container style={{ backgroundColor: '#f8f8f8' }} id='projects'>
            <Title linePosition='right'>Projects</Title>
            <Section grid={2}>
                {repos.length > 0 && repos.map((repo) => (
                     <Card
                        key={repo.id}
                        image={`https://picsum.photos/200/200?random=${i++}`}
                    >
                        <Card.Title>{repo.name}</Card.Title>
                        <Card.Body>{repo.description}</Card.Body>

                        <Card.Info>
                            <a
                                href={repo.html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    style={{  filter: 'invert(1)', width: '15px'  }}
                                    src='/icons/github.svg'
                                    alt=''
                               
                                />
                            </a>
                            <p>{repo.language}</p>
                        </Card.Info>
                        <Card.Button primary>Visit</Card.Button>
                    </Card>
                ))}
            </Section>
        </Container>
    );
};

export default Projects;
