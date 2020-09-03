import React from 'react';
import { Title, Card, Block, Book } from '../components';
import { useBookShelf } from '../hooks';

const Blog = () => {
    const { currentBook, booksRead } = useBookShelf();
    return (
        <div>
            <Title>Blog</Title>
            <Block>
                <Block.Title>Book Shelf</Block.Title>
                <Block.Split columns={'1fr 3fr'}>
                    <div>
                        <Block.SubTitle>Currently Reading</Block.SubTitle>
                        {currentBook && (
                            <Book.Shelf>
                                <Book
                                    big
                                    image={`http://covers.openlibrary.org/b/isbn/${currentBook.isbn[0]}-M.jpg?default=false`}
                                    link={currentBook.link[0]}
                                >
                                    <Book.Title>{currentBook.title}</Book.Title>
                                    <Book.Author>
                                        {currentBook.authors[0].author[0].name}
                                    </Book.Author>
                                </Book>
                            </Book.Shelf>
                        )}
                    </div>
                    <div>
                        <Block.SubTitle>Previously Read</Block.SubTitle>
                        <Book.Shelf>
                            {booksRead &&
                                booksRead.map(
                                    (book, index) =>
                                        book.isbn[0] > 0 && (
                                            <Book
                                                key={index}
                                                image={`http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`}
                                                link={book.link[0]}
                                            >
                                                <Book.Title>
                                                    {book.title}
                                                </Book.Title>
                                                <Book.Author>
                                                    {
                                                        book.authors[0]
                                                            .author[0].name
                                                    }
                                                </Book.Author>
                                            </Book>
                                        )
                                )}
                        </Book.Shelf>
                    </div>
                </Block.Split>
            </Block>
        </div>
    );
};

export default Blog;
