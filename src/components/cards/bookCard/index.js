import React, { useRef, useState } from 'react';
import {
    Container,
    Crease,
    Image,
    Content,
    Title,
    Author,
    Shelf,
} from './styles';

const Book = ({ children, image, link, big, ...restProps }) => {
    const ref = useRef(null);
    const [displayContent, setDisplayContent] = useState(false);
    return (
        <Container big={big} {...restProps}>
            {displayContent ? (
                <Content>{children}</Content>
            ) : (
                <Image
                    ref={ref}
                    src={image}
                    onError={() => {
                        ref.current.style.display = 'none';
                        setDisplayContent(true);
                    }}
                />
            )}
            <Crease />
        </Container>
    );
};

Book.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Book.Author = ({ children, ...restProps }) => (
    <Author {...restProps}>{children}</Author>
);

Book.Shelf = ({ children, ...restProps }) => (
    <Shelf {...restProps}>{children}</Shelf>
);

export default Book;
