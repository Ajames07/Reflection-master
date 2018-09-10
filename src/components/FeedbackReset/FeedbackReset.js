import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class FeedbackReset extends Component {


  handleNewFeedback = (event) => {
    const action = {type:'NEW_FEEDBACK', payload: this.state}
    Axios({
      method: 'POST',
      url: '/admin',
      data: this.props.reduxState.feedback
    }).then((response) => {
      console.log('back from POST: ', response.data);
      this.props.dispatch(action);
      this.props.history.push('/');
    }).catch((error) => {
      console.log(error);
      alert('Error unable to POST to Database')
    })
  }

  componentDidMount() {
    this.handleNewFeedback();
  }

  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <div>
          <button onclick={this.handleNewFeedback}>Leave New feedback</button>
        </div>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackReset);