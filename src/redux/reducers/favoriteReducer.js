import * as types from '../actions/actionTypes';
import initialState from './initialState';

const favoriteReducer = (state = initialState.favorites, action = {}) => {
  switch (action.type) {
    case types.ADD_REPOSITORY_TO_FAVORITES:
      return [...state, action.payload];
    case types.REMOVE_REPOSITORY_FROM_FAVORITES:
      return state.filter((favorite) => favorite.id !== action.payload.id);
    default:
      return state;
  }
};

export default favoriteReducer;
