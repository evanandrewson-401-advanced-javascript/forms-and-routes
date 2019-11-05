import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../containers/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
