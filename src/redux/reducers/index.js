import { combineReducers } from 'redux';

import apiCallsInProgress from './apiStatusReducer';
import repositories from './repositoryReducer';

const rootReducer = combineReducers({ apiCallsInProgress, repositories });

export default rootReducer;
