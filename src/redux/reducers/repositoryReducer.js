import * as types from '../actions/actionTypes';
import initialState from './initialState';

const repositoryReducer = (state = initialState.repositories, action = {}) => {
  if (action.type === types.LOAD_REPOSITORIES_SUCCESS) {
    return action.payload;
  } else {
    return state;
  }
};

export default repositoryReducer;
