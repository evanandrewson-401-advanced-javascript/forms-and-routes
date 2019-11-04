import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    <Router>
      <Header />
      <Switch>

      </Switch>
      <Footer />
    </Router>
    )
  }
}

export default App;