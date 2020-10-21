import React from 'react';
import Navigation from './containers/Navigation';
import { Alert } from './components';

// Pages
import Home from './sections/Home';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import About from './sections/About';

const App = () => (
    <>
        <Navigation />
        <Alert />
        <Home />
        <About />
        <Projects />
        <Blog />
    </>
);

export default App;
