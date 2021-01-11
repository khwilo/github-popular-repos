import React from 'react';
import './App.css';

import RepoListContainer from './components/RepoList';
import { useFetchRemote } from './hooks';

function App() {
  const [loading, response, error] = useFetchRemote(
    'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars'
  );

  return (
    <div className='wrapper'>
      <header className='header'>
        <h1 className='header__title'>
          GitHub Popular Repositories sorted by Star count
        </h1>
      </header>

      <main>
        <RepoListContainer
          response={response}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
