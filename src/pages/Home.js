import React from 'react';
import {
    Container,
    Block,
    Code,
    Button,
    Accordion,
    Title,
    Badge,
} from '../components';

const Home = () => {
    return (
        <Container>
            <Title linePosition='right'>Home</Title>
            <Block primary>
                <Block.Title>
                    A block <Badge small>123456</Badge>
                </Block.Title>
                <Block.SubTitle>
                    The Body of the block. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quidem cum quisquam voluptates
                    dolore libero magnam tempora voluptas, inventore error,
                    corporis, cumque ut beatae sed? Animi, quidem maxime?
                    Voluptatibus, repellendus sint.
                </Block.SubTitle>
                <Code language='javascript'>
                    {`if(code){
  return code
} else {
  return code - 1
  }`}
                </Code>
            </Block>
            <Block>
                <Code language='html'>{`<div>Content here</div>`}</Code>
            </Block>
            <Block>
                <Code language='python'>
                    {`for i in [1,2,3]:
  return i + 1`}
                </Code>
            </Block>
            <Block secondary>
                <Code title='Block 1' language='jsx'>
                    {`const CodeBlock = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};`}
                </Code>
            </Block>
            <Block primary>
                <Block.Title>A block</Block.Title>
                <Block.Content>
                    The Body of the block. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quidem cum quisquam voluptates
                    dolore libero magnam tempora voluptas, inventore error,
                    corporis, cumque ut beatae sed? Animi, quidem maxime?
                    Voluptatibus, repellendus sint.
                </Block.Content>
                <Button to='/about' primary>
                    About
                </Button>
                <Button href='http://github.com' secondary>
                    GitHub
                </Button>
                <Button border>Click me</Button>
            </Block>
            <Block>
                <Block.Title>FAQs</Block.Title>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Header 1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Molestiae, earum ipsam obcaecati ratione amet
                            voluptatem sit nihil quam repudiandae illum
                            perferendis placeat voluptates assumenda
                            voluptatibus nemo laborum. Excepturi, quas suscipit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Header 2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Molestiae, earum ipsam obcaecati ratione amet
                            voluptatem sit nihil quam repudiandae illum
                            perferendis placeat voluptates assumenda
                            voluptatibus nemo laborum. Excepturi, quas suscipit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Header 3</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Molestiae, earum ipsam obcaecati ratione amet
                            voluptatem sit nihil quam repudiandae illum
                            perferendis placeat voluptates assumenda
                            voluptatibus nemo laborum. Excepturi, quas suscipit.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Block>
        </Container>
    );
};

export default Home;
