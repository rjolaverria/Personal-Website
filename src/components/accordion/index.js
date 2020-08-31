import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Item, Header, Body } from './styles';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <ToggleContext.Provider value={{ activeIndex, setActiveIndex }}>
            <Container {...restProps}>
                <Inner>{children}</Inner>
            </Container>
        </ToggleContext.Provider>
    );
};

Accordion.Item = ({ children, ...restProps }) => (
    <Item {...restProps}>{children}</Item>
);

Accordion.Header = function AccordionHeader({ children, index, ...restProps }) {
    const { activeIndex, setActiveIndex } = useContext(ToggleContext);
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

Accordion.Body = function AccordionBody({ children, index, ...restProps }) {
    const { activeIndex } = useContext(ToggleContext);
    const active = activeIndex === index;
    return (
        <Body active={active} {...restProps}>
            {children}
        </Body>
    );
};

export default Accordion;
