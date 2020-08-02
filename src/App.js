import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Nav from './components/Navigation/Nav';
import Home from './components/Main/Home';
import Projects from './components/Main/Projects';
import Blog from './components/Main/Blog';
import About from './components/Main/About';

const App = () => (
  <Router>
    <Fragment>
      <Nav />
      <main>
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
      </main>
    </Fragment>
  </Router>
);

export default App;
