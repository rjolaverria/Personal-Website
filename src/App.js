import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './containers/Navigation';
import { Alert } from './components';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';

const App = () => (
    <Router>
        <Navigation />
        <Alert />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/projects'>
                <Projects />
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
        </Switch>
    </Router>
);

export default App;
