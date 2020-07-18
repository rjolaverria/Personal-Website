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
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </main>
    </Fragment>
  </Router>
);

export default App;
