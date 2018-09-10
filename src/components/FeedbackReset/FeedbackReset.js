import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class FeedbackReset extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackReset);