import React from 'react';
import { Container, Title, Card } from '../components';

const Projects = () => {
    return (
        <Container>
            <Title linePosition='right'>Projects</Title>
            <Card image='/images/AdobeStock_96003689.jpeg'>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text goes here</Card.Text>
            </Card>
            <Card image='/images/AdobeStock_96003689.jpeg'>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text goes here</Card.Text>
            </Card>
        </Container>
    );
};

export default Projects;
