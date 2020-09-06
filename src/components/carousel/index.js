import React, { useState, useContext, createContext } from 'react';
import {
    Container,
    Item,
    Image,
    Actions,
    Previous,
    Next,
    Status,
    Indicator,
} from './styles';

const CarouselContext = createContext();

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const limit = children.length - 1;

    return (
        <Container>
            {children.map((child, index) => (
                <CarouselContext.Provider
                    key={index}
                    value={{ index, activeIndex, setActiveIndex }}
                >
                    {child}
                </CarouselContext.Provider>
            ))}
            <Actions>
                <Previous
                    onClick={() => {
                        setActiveIndex(
                            activeIndex > 0 ? activeIndex - 1 : limit
                        );
                    }}
                />
                <Next
                    onClick={() => {
                        setActiveIndex(
                            activeIndex < limit ? activeIndex + 1 : 0
                        );
                    }}
                />
            </Actions>
            <Status>
                {children.map((child, index) => (
                    <Indicator
                        key={index}
                        active={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </Status>
        </Container>
    );
};

Carousel.Item = function CarouselItem({ children, src, ...restProps }) {
    const { index, activeIndex } = useContext(CarouselContext);

    return (
        <Item active={activeIndex === index} {...restProps}>
            <Image src={src} />
        </Item>
    );
};
export default Carousel;
