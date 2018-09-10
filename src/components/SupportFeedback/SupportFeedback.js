import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

 class SupportFeedback extends Component {
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

export default connect(mapReduxStateToProps)(SupportFeedback);