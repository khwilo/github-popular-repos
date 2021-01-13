import * as types from './actionTypes';

export const addRepositoryToFavorites = (repository) => {
  return { type: types.ADD_REPOSITORY_TO_FAVORITES, payload: repository };
};

export const removeRepositoryFromFavorites = (repository) => {
  return { type: types.REMOVE_REPOSITORY_FROM_FAVORITES, payload: repository };
};
