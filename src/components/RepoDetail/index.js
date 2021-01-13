import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as repositoryActions from '../../redux/actions/repositoryActions';
import './repoDetail.css';

const RepoDetail = ({ actions, loading, repositories }) => {
  const [repo, setRepo] = React.useState({});
  const { id: paramsId } = useParams();

  React.useEffect(() => {
    if (repositories.length === 0) {
      actions.loadRepositories().catch((error) => {
        alert('[FAILED TO LOAD REPOSITORIES]', error);
      });
    }
  }, []);

  React.useEffect(() => {
    if (paramsId && repositories.length > 0) {
      const repoById = repositories.find(
        (item) => item.id === parseInt(paramsId, 10)
      );
      setRepo({ ...repoById });
    }
  }, [paramsId, repositories]);

  return (
    <div className='details-wrapper'>
      <h1 className='header-title'>GitHub Popular Repositories Detail</h1>
      {loading ? <div>Loading...</div> : null}
      <section className='section section--details'>
        <article className='article article-left'>
          <h1 className='section--details__title'>{repo.name}</h1>
          {repo.owner ? (
            <img
              className='section--details__img'
              src={repo.owner.avatar_url}
              alt={`${repo.name} repository avatar`}
            />
          ) : null}
          <small className='section--details__date'>
            Created On:{' '}
            {repo.created_at
              ? format(new Date(repo.created_at), 'yyyy-MM-dd')
              : null}
          </small>
        </article>
        <article className='article article-right'>
          <div>
            <h2>
              {repo.language ? (
                <span>
                  <span className='language-heading'>Programming Language</span>
                  : {repo.language}
                </span>
              ) : null}
            </h2>
            <p>{repo.description}</p>
          </div>
          <div className='d-flex-ml'>
            <p>
              <FontAwesomeIcon icon={faStar} color='gray' />{' '}
              {repo.stargazers_count}
            </p>
            <p>
              <FontAwesomeIcon icon={faEye} color='gray' />{' '}
              {repo.watchers_count}
            </p>
          </div>
          <div className='d-flex-ml'>
            <p>
              {repo.html_url ? (
                <a href={repo.html_url}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              ) : null}
            </p>
            <p>
              {repo.homepage ? (
                <a href={repo.homepage}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : null}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
