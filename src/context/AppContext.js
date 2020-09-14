import React, { useState, createContext } from 'react';
import { useBookShelf } from '../hooks';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const books = useBookShelf();
    const [alert, setAlert] = useState('');
    return (
        <AppContext.Provider value={{ books, alert, setAlert }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };
