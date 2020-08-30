import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components';
import Navigation from './containers/Navigation';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';

const App = () => (
    <Router>
        <Fragment>
            <Navigation />
            <Container>
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
            </Container>
        </Fragment>
    </Router>
);

export default App;
