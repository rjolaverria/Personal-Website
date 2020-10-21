import React, { useContext } from 'react';
import { Container, Section, Title, Card } from '../components';
import { AppContext } from '../context/AppContext';


const Projects = () => {
    const { repos } = useContext(AppContext);
    return (
        <Container style={{ backgroundColor: '#f8f8f8' }} id='projects'>
            <Title linePosition='right'>Projects</Title>
            <Section grid={1}>
                {repos.map((repo) => (
                    <Card
                        key={repo.id}
                        image='https://picsum.photos/300/200?random=3'
                    >
                        <Card.Title>{repo.name}</Card.Title>
                        <Card.Body>{repo.description}</Card.Body>

                        <Card.Info>
                            <a
                                href={repo.html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                check
                            </a>
                        </Card.Info>
                        <Card.Button primary>Click me</Card.Button>
                    </Card>
                ))}
            </Section>
        </Container>
    );
};

export default Projects;
