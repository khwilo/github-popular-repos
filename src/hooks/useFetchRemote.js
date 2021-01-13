/*
 * Custom React hook for fetching data from an API.
 * Utilizes React's useReducer and useState hooks to manage state.
 * ------------------------------------------------------
 * NOTE: The app use Redux to manage global state.
 * View the the code from the redux folder.
 * ------------------------------------------------------
*/

import React from 'react';

function useFetchRemote(url) {
  const [data, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'LOADING':
          return { ...state, loading: true };
        case 'RESOLVED':
          return {
            ...state,
            loading: false,
            response: action.payload,
            error: null,
          };
        case 'ERROR':
          return {
            ...state,
            loading: false,
            response: null,
            error: action.payload,
          };
        default:
          return state;
      }
    },
    { loading: false, response: null, error: null }
  );

  React.useEffect(() => {
    let isCurrent = true;
    dispatch({ type: 'LOADING' });
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (isCurrent) {
          dispatch({ type: 'RESOLVED', payload: json });
        }
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err });
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return [data.loading, data.response, data.error];
}

export default useFetchRemote;
