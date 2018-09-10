import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const supportFormFeedback = {
  newPersonObject:{
    support: 0,
  }
}

 class SupportFeedback extends Component {
   constructor() {
     super();

   }

  handleSupportSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    const action = {type: 'SUPPORT_DATA', payload: this.state}
    this.props.dispatch(action);
    this.props.history.push('/comments')
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSupportSubmit}>
          <input type="number" onChange={this.handleSupportChange} name="support" required/>
        </form>
        <div>
          <button type="submit">Continue</button>
        </div>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SupportFeedback);