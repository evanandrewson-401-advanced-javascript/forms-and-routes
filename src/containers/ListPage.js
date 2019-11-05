import React, { Component } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import apiCall from '../services/apiCall';
import PropTypes from 'prop-types';

class ListPage extends Component {
  state = {
    characters: [],
    searchInput: this.props.location.search.slice(6, this.props.location.search.length),
    page: 1
  }

  componentDidMount() {
    this.searchChars();
  }

  searchChars = () => {
    if(this.state.searchInput) {
      return apiCall(`http://last-airbender-api.herokuapp.com/api/v1/characters?name=${this.state.searchInput}`)
        .then(result => {
          this.setState({ characters: result });
        });
    } else {
      return apiCall(`http://last-airbender-api.herokuapp.com/api/v1/characters?page=${this.state.page}`)
        .then(result => {
          this.setState({ characters: result });
        });
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
    
  }

  incrementPage = () => {
    this.setState(state => ({ page: state.page + 1 }), () => {
      return apiCall(`http://last-airbender-api.herokuapp.com/api/v1/characters?page=${this.state.page}`)
        .then(result => {
          this.setState({ characters: result, searchInput: '' });
        });
    });
  }

  decrementPage = () => {
    this.setState(state => ({ page: state.page - 1 }), () => {
      return apiCall(`http://last-airbender-api.herokuapp.com/api/v1/characters?page=${this.state.page}`)
        .then(result => {
          this.setState({ characters: result, searchInput: '' });
        });
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/list/?name=${this.state.searchInput}`);
    this.searchChars();
  }

  clearSearchInput = () => {
    this.setState({ searchInput: null, page: 1 }, () => {
      this.searchChars();
    });
    this.props.history.push('/list');
    
  }

  toDetailPage = (e) => {
    e.preventDefault();
    this.props.history.push(`/detail/${e.currentTarget.value}`);
  }

  render() {
    return (
      <>
        <ListOfCharacters items={this.state.characters} toDetailPage={this.toDetailPage} />
        <button disabled={this.state.searchInput ? true : false} onClick={this.incrementPage}>Page up</button>
        <button disabled={this.state.searchInput ? true : false || this.state.page < 2} onClick={this.decrementPage}>Page down</button>
        <button disabled={!this.state.searchInput ? true : false} onClick={this.clearSearchInput}>All Characters</button>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.searchInput} onChange={this.handleChange}></input>
          <button>Search</button>
        </form>
      </>
    );
  }
}

ListPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default ListPage;
