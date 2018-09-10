import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

const commentsFormObject = {
  newPersonObject:{
    comments:'',
  },
}

class CommentsFeedback extends Component {

  handleCommentChange = (event) => {
    this.setState({
      newPersonObject: {
        ...this.state.newPersonObject,
            [event.target.comments] : event.target.value,
      }
    })
  }


  render() {
    return (
      <div>
        <form onSubmit="handleCommentsSubmit">
          <input onChange={this.handleCommentChange} placeholder="comment here" name="comments" required/>
        </form>
        <div>
          <button type="submit">Continue</button>
        </div>
      </div>
    )
  }//end render
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CommentsFeedback);