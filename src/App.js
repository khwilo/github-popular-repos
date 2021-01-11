import React from 'react';

import './App.css';

import { useFetchRemote } from './hooks';

function App() {
  const [loading, response, error] = useFetchRemote(
    'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars'
  );

  return (
    <div>
      <header>
        <h1>GitHub Popular Repositories sorted by Star count</h1>
      </header>

      <main>
        {loading ? <div>Loading...</div> : null}
        {error ? <div>Error fetching data</div> : null}
        {response
          ? response.items.map((item) => {
              return (
                <div id={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <a href={item.homepage ? item.homepage : '#'}>Homepage</a>
                  <a href={item.htmL_url ? item.htmL_url : '#'}>URL</a>
                  <p>{item.language}</p>
                  <p>Stars count: {item.stargazers_count}</p>
                  <p>Open issues count: {item.open_issues_count}</p>
                  <p>Watchers count: {item.watchers_count}</p>
                </div>
              );
            })
          : null}
      </main>
    </div>
  );
}

export default App;
