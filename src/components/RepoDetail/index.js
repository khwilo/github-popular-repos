import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchRemote } from '../../hooks';
import './repoDetail.css';

const RepoDetail = () => {
  const [loading, response, error] = useFetchRemote(
    'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars'
  );
  const [repo, setRepo] = React.useState({});
  const { id: paramsId } = useParams();

  React.useEffect(() => {
    if (loading === false && response !== null) {
      const data = response.items.find(
        (item) => item.id === parseInt(paramsId, 10)
      );
      setRepo(data);
    }
  }, [loading, response, paramsId]);

  return (
    <div className='details-wrapper'>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Error fetching data</div> : null}
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
                <span className='text-gray'>Programming Language:</span>
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

export default RepoDetail;
