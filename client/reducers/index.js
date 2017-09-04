import  { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import modalBox from './modalBox';

const rootReducer = combineReducers({ posts, comments, modalBox, routing: routerReducer });

export default rootReducer;