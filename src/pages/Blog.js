import React, { useContext } from 'react';
import { Container, Title, Block, Book } from '../components';
import { ContentContext } from '../context/ContentContext';

const Blog = () => {
    const {
        books: { currentBook, booksRead },
    } = useContext(ContentContext);

    return (
        <Container>
            <Title>Blog</Title>
            <Block>
                <Block.Title>
                    Book Shelf{' | '}
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
                </Block.Title>
                <Block.Split>
                    <div>
                        <Block.SubTitle>Currently Reading</Block.SubTitle>
                        {currentBook ? (
                            <Book.Shelf>
                                <Book
                                    big
                                    image={currentBook.image}
                                    link={currentBook.link[0]}
                                >
                                    <Book.Title>{currentBook.title}</Book.Title>
                                    <Book.Author>
                                        {currentBook.authors[0].author[0].name}
                                    </Book.Author>
                                </Book>
                            </Book.Shelf>
                        ) : (
                            'Loading...'
                        )}
                    </div>
                    <div>
                        <Block.SubTitle>Previously Read</Block.SubTitle>
                        <Book.Shelf>
                            {booksRead
                                ? booksRead.map(
                                      (book, index) =>
                                          book.isbn[0] > 0 && (
                                              <Book
                                                  key={index}
                                                  image={book.image}
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
                                  )
                                : 'Loading'}
                        </Book.Shelf>
                    </div>
                </Block.Split>
            </Block>
        </Container>
    );
};

export default Blog;
