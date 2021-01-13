import { fetchRepositories } from '../../api';
import * as types from './actionTypes';

export const loadRepositoriesSuccess = (repositories) => {
  return { type: types.LOAD_REPOSITORIES_SUCCESS, payload: repositories };
};

export const loadRepositories = () => {
  return async (dispatch) => {
    try {
      const repositories = await fetchRepositories();
      dispatch(loadRepositoriesSuccess(repositories));
      return repositories;
    } catch (error) {
      console.log('[API CALL ERROR] :', error);
      throw error;
    }
  };
};
