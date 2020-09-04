import React, { createContext } from 'react';
import { useBookShelf } from '../hooks';

const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
    const books = useBookShelf();
    return (
        <ContentContext.Provider value={{ books }}>
            {children}
        </ContentContext.Provider>
    );
};

export { ContentContext, ContentContextProvider };
