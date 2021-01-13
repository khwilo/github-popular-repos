import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faEye,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './repoCard.css';

const RepoCard = ({
  id,
  name,
  description,
  homepage,
  repoURL,
  stargazersCount,
  watchersCount,
}) => (
  <section className='section section--detail'>
    <Link className='detail-linkWrapper' to={`repo/${id}`}>
      <div className='detail-top d-flex'>
        <h2>{name}</h2>
        <FontAwesomeIcon icon={faHeart} color='gray' />
      </div>
      <p>{description}</p>
      <div className='d-flex'>
        <p>
          <FontAwesomeIcon icon={faStar} color='gray' /> {stargazersCount}
        </p>
        <p>
          <FontAwesomeIcon icon={faEye} color='gray' /> {watchersCount}
        </p>
      </div>
      <div className='section__footer'>
        <div className='d-flex'>
          <p>
            {repoURL ? (
              <a href={repoURL}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            ) : null}
          </p>
          <p>
            {homepage ? (
              <a href={homepage}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            ) : null}
          </p>
        </div>
      </div>
    </Link>
  </section>
);

export default RepoCard;
