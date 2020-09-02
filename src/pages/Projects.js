import React from 'react';
import { Title, Card } from '../components';

const Projects = () => {
    return (
        <div>
            <Title linePosition='right'>Projects</Title>
            <Card image='/images/AdobeStock_96003689.jpeg'>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text goes here</Card.Text>
            </Card>
            <Card image='/images/AdobeStock_96003689.jpeg'>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text goes here</Card.Text>
            </Card>
        </div>
    );
};

export default Projects;
