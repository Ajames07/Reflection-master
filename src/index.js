import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackObject = {
    person: {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    },
    feedback: [],
}

const feedbackData = (state = feedbackObject, action) => {
    if(action.type === 'FEEDBACK_DATA'){
       const newData = action.payload;
        return {...state,feedback: newData.feedback}
    }
    return state;
}//end feedbackData

const storeInstance = createStore(
    combineReducers({feedbackData}),
    applyMiddleware(logger),
);//end storeInstance

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
