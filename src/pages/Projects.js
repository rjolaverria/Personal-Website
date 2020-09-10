import React from 'react';
import {
    Container,
    Title,
    VideoCard,
    Block,
    Card,
    Button,
} from '../components';

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
                    <Card.Footer>
                        <Card.Info>Some info here</Card.Info>
                        <Button primary>Click me</Button>
                    </Card.Footer>
                </Card>
            </Block>
        </Container>
    );
};

export default Projects;
