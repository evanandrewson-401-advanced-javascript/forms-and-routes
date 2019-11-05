import React, { Component } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import apiCall from '../services/apiCall';
import PropTypes from 'prop-types';

class DetailPage extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = () => {
    return apiCall(`http://last-airbender-api.herokuapp.com/api/v1/characters/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ characters: result });
      });
  }

  render() {
    return (
      <>
        <CharacterDetail {...this.state.characters} />
      </>
    );
  }
}

DetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default DetailPage;
