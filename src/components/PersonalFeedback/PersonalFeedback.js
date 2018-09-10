import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const personalFormObject = {
    newPersonObject: {
        feeling: 0,
    }
}

class PersonalFeedback extends Component {
    constructor() {
        super();
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const action = {type: 'PERSONAL_DATA', payload: this.state}
        this.props.dispatch(action);
        this.props.history.push('/understanding')
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="number" onChange={this.handleSubmit} placeholder="How are you feeling on a scale of 1 to 5?" name="feeling" required/>
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

export default connect(mapReduxStateToProps)(PersonalFeedback);