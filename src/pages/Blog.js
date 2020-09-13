import React, { useContext } from 'react';
import { Container, Title, Block, BookCard } from '../components';
import { ContentContext } from '../context/ContentContext';

const Blog = () => {
    const {
        books: { currentBook, booksRead },
    } = useContext(ContentContext);

    return (
        <Container>
            <Title>Blog</Title>
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
            <Block.Section>
                <Block>
                    <Block.SubTitle>Currently Reading</Block.SubTitle>
                    {currentBook ? (
                        <BookCard.Shelf>
                            <BookCard
                                big
                                image={currentBook.image}
                                link={currentBook.link[0]}
                            >
                                <BookCard.Title>
                                    {currentBook.title}
                                </BookCard.Title>
                                <BookCard.Author>
                                    {currentBook.authors[0].author[0].name}
                                </BookCard.Author>
                            </BookCard>
                        </BookCard.Shelf>
                    ) : (
                        'Loading...'
                    )}
                </Block>
                <Block>
                    <Block.SubTitle>Previously Read</Block.SubTitle>
                    <BookCard.Shelf>
                        {booksRead
                            ? booksRead.map(
                                  (book, index) =>
                                      book.isbn[0] > 0 && (
                                          <BookCard
                                              key={index}
                                              image={book.image}
                                              link={book.link[0]}
                                          >
                                              <BookCard.Title>
                                                  {book.title}
                                              </BookCard.Title>
                                              <BookCard.Author>
                                                  {
                                                      book.authors[0].author[0]
                                                          .name
                                                  }
                                              </BookCard.Author>
                                          </BookCard>
                                      )
                              )
                            : 'Loading'}
                    </BookCard.Shelf>
                </Block>
            </Block.Section>
        </Container>
    );
};

export default Blog;
