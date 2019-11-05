import React, { Component } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import apiCall from '../services/apiCall';
import PropTypes from 'prop-types';

class HomePage extends Component {
  state = {
    characters: [],
    searchInput: 'Look for characters'
  }

  componentDidMount() {
    this.getNewChar();
  }

  getNewChar = () => {
    return apiCall('http://last-airbender-api.herokuapp.com/api/v1/characters/random')
      .then(result => {
        this.setState({ characters: result });
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/list/?name=${this.state.searchInput}`);
  }

  toDetailPage = (e) => {
    e.preventDefault();
    this.props.history.push(`/detail/${e.currentTarget.value}`);
  }

  render() {
    return (
      <>
        <ListOfCharacters items={this.state.characters} toDetailPage={this.toDetailPage} />
        <button onClick={this.getNewChar}>Get New Character</button>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.searchInput} onChange={this.handleChange}></input>
          <button>Search</button>
        </form>
      </>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired
};

export default HomePage;
