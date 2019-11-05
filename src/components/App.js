import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../containers/HomePage';
import ListPage from '../containers/ListPage';
import DetailPage from '../containers/DetailPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/list" component={ListPage} />
          <Route path="/detail/:id" component={DetailPage}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
