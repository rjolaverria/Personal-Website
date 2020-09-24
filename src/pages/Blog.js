import React, { useContext } from 'react';
import { Container, Title, Book, Loading, Badge } from '../components';
import { AppContext } from '../context/AppContext';

const Blog = () => {
    const { books } = useContext(AppContext);
    const { currentBook, favBooks } = books;

    return (
        <Container>
            <Title>Blog</Title>
            <Book.Shelf>
                <Book.ShelfTitle>
                    My Book Shelf{' | '}
                    <a
                        href='https://www.goodreads.com/review/list/105003741?shelf=read'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <img
                            border='0'
                            alt="Rafi Olaverria's book recommendations, liked quotes, book clubs, book trivia, book lists (read shelf)"
                            src='https://www.goodreads.com/images/badge/badge1.jpg'
                        />
                    </a>
                </Book.ShelfTitle>
                <Book.ShelfSub>Currently Reading</Book.ShelfSub>
                {currentBook ? (
                    <Book
                        showcase
                        image={currentBook.image}
                        link={currentBook.link[0]}
                        title={currentBook.title}
                        author={currentBook.authors[0].author[0].name}
                    />
                ) : (
                    <Loading />
                )}
                <Book.ShelfSub>Recent favorites</Book.ShelfSub>
                {favBooks ? (
                    favBooks.map((book, index) => (
                        <Book
                            key={index}
                            image={book.image}
                            link={book.link[0]}
                            title={book.title}
                            author={book.authors[0].author[0].name}
                        ></Book>
                    ))
                ) : (
                    <Loading />
                )}
            </Book.Shelf>
        </Container>
    );
};

export default Blog;
