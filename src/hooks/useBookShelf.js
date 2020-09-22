import { useState, useEffect } from 'react';
import { parseString } from 'xml2js';
import { get } from 'axios';

const useBookShelf = () => {
    const [currentBook, setCurrentBook] = useState(null);
    const [booksRead, setBooksRead] = useState(null);
    const [favBooks, setFavBooks] = useState(null);

    useEffect(() => {
        get(
            'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/105003741.xml?key=oiTfyoS9O3jlWt5tcWqxg&shelf=currently-reading'
        ).then((res) =>
            parseString(res.data, function (err, result) {
                const book = result.GoodreadsResponse.books[0].book[0];
                setCurrentBook({
                    image: `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`,
                    ...book,
                });
            })
        );

        get(
            'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/105003741.xml?key=oiTfyoS9O3jlWt5tcWqxg&shelf=read'
        ).then((res) =>
            parseString(res.data, function (err, result) {
                setBooksRead(
                    result.GoodreadsResponse.books[0].book.map((book) => ({
                        image: `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`,
                        ...book,
                    }))
                );
            })
        );

        get(
            'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/105003741.xml?key=oiTfyoS9O3jlWt5tcWqxg&shelf=favorites'
        ).then((res) =>
            parseString(res.data, function (err, result) {
                setFavBooks(
                    result.GoodreadsResponse.books[0].book.map((book) => ({
                        image: `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`,
                        ...book,
                    }))
                );
            })
        );
    }, []);
    return { currentBook, booksRead, favBooks };
};

export default useBookShelf;
