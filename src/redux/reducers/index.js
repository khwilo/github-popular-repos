import { combineReducers } from 'redux';

import apiCallsInProgress from './apiStatusReducer';
import favorites from './favoriteReducer';
import repositories from './repositoryReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  favorites,
  repositories,
});

export default rootReducer;
