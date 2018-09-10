import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class UnderstandingsFeedBack extends Component {
  constructor() {
    super();
  }

  handleUnderstandingSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
        event.preventDefault();
        const action = {type: 'UNDERSTANDING_DATA', payload: this.state}
        this.props.dispatch(action);
        this.props.history.push('/support')
  }

  render() {
    return (
      <div>
        <form>
          <input type="number" onChange={this.handleUnderstandingChange} name="understanding"/>
          <div>
          <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(UnderstandingsFeedBack);