import React, { useRef, useState } from 'react';
import { Container, Image, Content, Title, Author, Shelf } from './styles';

const Book = ({ children, image, link, big, ...restProps }) => {
    const ref = useRef(null);
    const [displayContent, setDisplayContent] = useState(false);
    return (
        <Container big={big} {...restProps}>
            <a href={link} target='_blank' rel='noreferrer noopener'>
                <Image
                    ref={ref}
                    src={image}
                    onError={() => {
                        ref.current.style.display = 'none';
                        setDisplayContent(true);
                    }}
                />
                {displayContent && <Content big={big}>{children}</Content>}
            </a>
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
