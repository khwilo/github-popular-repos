import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NotFound from './components/NotFound';
import RepoDetail from './components/RepoDetail';
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
        <Router>
          <Switch>
            <Route path='/repo/:id'>
              <RepoDetail />
            </Route>
            <Route exact path='/'>
              <RepoListContainer
                response={response}
                loading={loading}
                error={error}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
