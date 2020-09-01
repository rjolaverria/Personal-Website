import React, { useState, useContext, createContext } from 'react';
import { Container, Item, Header, Body } from './styles';

const AccordionContext = createContext();

const Accordion = ({ children, ...restProps }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <Container {...restProps}>
            {children.map((child, index) => (
                <AccordionContext.Provider
                    key={index}
                    value={{ index, activeIndex, setActiveIndex }}
                >
                    {child}
                </AccordionContext.Provider>
            ))}
        </Container>
    );
};

Accordion.Item = ({ children, ...restProps }) => (
    <Item {...restProps}>{children}</Item>
);

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { index, activeIndex, setActiveIndex } = useContext(AccordionContext);
    const handleClick = () => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <Header onClick={handleClick} {...restProps}>
            {children}
            {activeIndex === index ? (
                <i className='fas fa-minus'></i>
            ) : (
                <i className='fas fa-plus'></i>
            )}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { index, activeIndex } = useContext(AccordionContext);
    const active = activeIndex === index;
    return (
        <Body active={active} {...restProps}>
            {children}
        </Body>
    );
};

export default Accordion;
