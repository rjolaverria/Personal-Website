import React, { useRef, useState } from 'react';
import {
    Container,
    Crease,
    Image,
    Content,
    Title,
    Author,
    Shelf,
    ShelfTitle,
    ShelfSubTitle,
} from './styles';

const Book = function Book({
    title,
    author,
    image,
    link,
    showcase,
    ...restProps
}) {
    const ref = useRef(null);
    const [displayContent, setDisplayContent] = useState(false);

    return (
        <Container showcase={showcase} {...restProps} href={link}>
            {displayContent ? (
                <Content>
                    <Title>{title}</Title>
                    <Author>{author}</Author>
                </Content>
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

Book.Shelf = ({ children, title, social, ...restProps }) => (
    <Shelf {...restProps}>{children}</Shelf>
);

Book.ShelfTitle = ({ children, ...restProps }) => (
    <ShelfTitle {...restProps}>{children}</ShelfTitle>
);

Book.ShelfSub = ({ children, ...restProps }) => (
    <ShelfSubTitle {...restProps}>{children}</ShelfSubTitle>
);

export default Book;
