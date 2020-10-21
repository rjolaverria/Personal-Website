import React, { useState, createContext } from 'react';
import { useBookShelf, useRepos } from '../hooks';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const books = useBookShelf();
    const repos = useRepos();
    const [alert, setAlert] = useState('');
    return (
        <AppContext.Provider value={{ books, repos, alert, setAlert }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };
