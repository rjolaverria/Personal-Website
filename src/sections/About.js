import React from 'react';
import { Container, Title, Section } from '../components';


const About = () => {
    return (
        <Container id='about'>
            <Title>About Me</Title>
            <Section grid={1}>
                <img src='https://picsum.photos/300/200' alt='Me' />
                <p style={{ textIndent: '50px' }}>
                    Growing up in the United States as an undocumented immigrant
                    has by far been the greatest privilege and challenge in my
                    life. I was born in the Dominican Republic, and moved to the
                    United States with my family when I was just 6 months old.
                    Throughout my upbringing my parents never told me I was
                    undocumented, until I turned 13 years old. Once I became
                    aware of my circumstances and uncertainty of my future, I
                    would hide the truth of who I really was from others. I
                    never allowed my background to be a topic of conversation
                    because of the stigmatization undocumented immigrants
                    experience within the United States. At times I also felt
                    ashamed of my identity and encountered constant obstacles in
                    the goals that I would set out for myself. I hit rock bottom
                    many times, but I knew that regardless of my situation I had
                    to continue to persevere in order to achieve my goals. In
                    2012 I applied for and was granted Deferred Action for
                    Childhood Arrivals (DACA), which gave me the ability to work
                    legally and develop my entrepreneurial skills. In addition
                    to this new sense of independence, DACA motivated and
                    inspired me to keep moving forward. Through this opportunity
                    I also recognized that I had a community behind me that
                    cared for my future. Although a tough challenge, my status
                    has been a privilege because it has taught me to work
                    harder, develop resilience, and find creative ways to
                    problem solve. As a child I was always curious about
                    technology and how things functioned.
                </p>
            </Section>
        </Container>
    );
};

export default About;
