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
