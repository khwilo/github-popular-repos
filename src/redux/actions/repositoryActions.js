import { fetchRepositories } from '../../api';
import * as types from './actionTypes';
import { apiCallError, beginAPICall } from './apiStatusActions';

export const loadRepositoriesSuccess = (repositories) => {
  return { type: types.LOAD_REPOSITORIES_SUCCESS, payload: repositories };
};

export const loadRepositories = () => {
  return async (dispatch) => {
    try {
      dispatch(beginAPICall());
      const repositories = await fetchRepositories();
      dispatch(loadRepositoriesSuccess(repositories));
      return repositories;
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
};
