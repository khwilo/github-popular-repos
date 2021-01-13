import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.css';
import NotFound from './components/NotFound';
import RepoDetail from './components/RepoDetail';
import RepoListContainer from './components/RepoList';
import * as repositoryActions from './redux/actions/repositoryActions';

function App({ repositories, actions }) {
  React.useEffect(() => {
    if (repositories.length === 0) {
      actions.loadRepositories().catch((error) => {
        alert('[FAILED TO LOAD FOLLOWERS]: ', error);
      });
    }
  }, []);

  return (
    <div className='wrapper'>
      <header className='header'>
        <h1 className='header__title'>
          GitHub Popular Repositories sorted by Star count
        </h1>
      </header>

      <main>
        {/* {loading ? <div>Loading...</div> : null}
        {error ? <div>Error fetching data</div> : null} */}
        <Router>
          <Switch>
            <Route path='/repo/:id'>
              <RepoDetail />
            </Route>
            <Route exact path='/'>
              <RepoListContainer repositories={repositories} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
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
