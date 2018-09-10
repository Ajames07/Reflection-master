import React, { Component } from 'react';
import Axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PersonalFeedback from '../PersonalFeedback/PersonalFeedback.js';
import UnderstandingFeedback from '../UnderstandingsFeedback/UnderstandingsFeedBack.js';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback.js';
import SupportFeedback from '../SupportFeedback/SupportFeedback.js';
import FeedbackReset from '../FeedbackReset/FeedbackReset.js';
import AdminPage from '../AdminPage/AdminPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path="/" component={PersonalFeedback} />
          <Route path="/understanding" component={UnderstandingFeedback} />
          <Route path="/comments" component={CommentsFeedback} />
          <Route path="/support" component={SupportFeedback} />
          <Route path="/reset" component={FeedbackReset} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;
