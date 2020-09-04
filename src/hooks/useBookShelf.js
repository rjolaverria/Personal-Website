import { useState, useEffect } from 'react';
import { parseString } from 'xml2js';
import { get } from 'axios';

const useBookShelf = () => {
    const [currentBook, setCurrentBook] = useState();
    const [booksRead, setBooksRead] = useState();

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
            'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/105003741.xml?key=oiTfyoS9O3jlWt5tcWqxg&shelf=read&sort=cover&per_page=20'
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
    }, []);
    return { currentBook, booksRead };
};

export default useBookShelf;
