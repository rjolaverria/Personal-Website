import React from 'react';
import { Container, Title, Modal, Carousel } from '../components';

const About = () => {
    return (
        <Container>
            <Title>About</Title>
            <Modal>
                <Modal.Title>This is a Modal</Modal.Title>
                <Modal.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus iste sequi amet. Officia, velit ab, cumque nam eaque
                    incidunt deserunt magnam deleniti a placeat inventore culpa
                    ut, fugit consectetur dolore!
                </Modal.Content>
                <Modal.Exit>Close</Modal.Exit>
            </Modal>
            <Carousel>
                <Carousel.Item src={'https://picsum.photos/400/200?random=1'} />
                <Carousel.Item src={'https://picsum.photos/400/200?random=2'} />
                <Carousel.Item src={'https://picsum.photos/400/200?random=3'} />
                <Carousel.Item src={'https://picsum.photos/400/200?random=4'} />
            </Carousel>
        </Container>
    );
};

export default About;
