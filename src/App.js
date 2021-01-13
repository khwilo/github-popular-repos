import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.css';
import NotFound from './components/NotFound';
import RepoDetail from './components/RepoDetail';
import RepoListContainer from './components/RepoList';
import * as repositoryActions from './redux/actions/repositoryActions';

function App({ actions, loading, repositories }) {
  React.useEffect(() => {
    if (repositories.length === 0) {
      actions.loadRepositories().catch((error) => {
        alert('[FAILED TO LOAD REPOSITORIES]: ', error);
      });
    }
  }, []);

  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      <Router>
        <header className='header'>
          <div className='header__wrapper'>
            <h1 className='site-logo'>
              <Link to='/' className='site-logo__link'>
                GP
              </Link>
            </h1>
            <nav className='nav'>
              <ul className='nav__list'>
                <li className='nav__item'>
                  <Link className='nav__link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/favorites'>
                    Favorites
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className='wrapper'>
          <Switch>
            <Route path='/repo/:id'>
              <RepoDetail />
            </Route>
            <Route exact path='/'>
              <RepoListContainer repositories={repositories} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRepositories: bindActionCreators(
        repositoryActions.loadRepositories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
