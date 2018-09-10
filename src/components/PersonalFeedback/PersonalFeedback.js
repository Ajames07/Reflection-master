import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class PersonalFeedback extends Component {
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input type="number" onChange={this.handleSubmit} placeholder="How are you feeling on a scale of 1 to 5?" required/>
          </form>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PersonalFeedback);