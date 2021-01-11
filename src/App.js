import React from 'react';

import './App.css';
import RepoCard from './components/RepoCard';
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
        {loading ? <div>Loading...</div> : null}
        {error ? <div>Error fetching data</div> : null}
        <div className='repositories'>
          {response
            ? response.items.map((item) => {
                return (
                  <RepoCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    repoURL={item.html_url}
                    homepage={item.homepage}
                    stargazersCount={item.stargazers_count}
                    watchersCount={item.watchers_count}
                  />
                );
              })
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
