import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class UnderstandingsFeedBack extends Component {
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

export default connect(mapReduxStateToProps)(UnderstandingsFeedBack);