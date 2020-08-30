import React from 'react';
import { Block, Code } from '../components';

const Home = () => {
    return (
        <section>
            <h1>Home</h1>
            <Block primary>
                <Block.Title>A block</Block.Title>
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
                <Code language='javascript'>
                    {`if(code){
  return code
} else {
  return code - 1
  }`}
                </Code>
            </Block>
        </section>
    );
};

export default Home;
