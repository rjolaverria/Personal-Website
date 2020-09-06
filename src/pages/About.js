import React from 'react';
import { Title, Modal } from '../components';

const About = () => {
    return (
        <div>
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
        </div>
    );
};

export default About;
