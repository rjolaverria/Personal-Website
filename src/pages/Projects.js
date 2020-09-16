import React from 'react';
import { Container, Title, VideoCard, Block, Card } from '../components';

const Projects = () => {
    return (
        <Container>
            <Title linePosition='right'>Projects</Title>
            <Block>
                <VideoCard image='/images/AdobeStock_96003689.jpeg'>
                    <VideoCard.Title>Title</VideoCard.Title>
                    <VideoCard.Text>Text goes here</VideoCard.Text>
                </VideoCard>
                <VideoCard image='/images/AdobeStock_96003689.jpeg'>
                    <VideoCard.Title>Title</VideoCard.Title>
                    <VideoCard.Text>Text goes here</VideoCard.Text>
                </VideoCard>
            </Block>

            <Block>
                <Card image='/images/AdobeStock_96003689.jpeg'>
                    <Card.Title>Title</Card.Title>
                    <Card.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Unde obcaecati fugiat, fuga ratione optio at eos
                        temporibus.
                    </Card.Body>

                    <Card.Info>Some info here</Card.Info>
                    <Card.Button primary>Click me</Card.Button>
                </Card>
            </Block>
        </Container>
    );
};

export default Projects;
