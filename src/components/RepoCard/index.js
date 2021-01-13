import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faEye,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as favoriteActions from '../../redux/actions/favoriteActions';
import './repoCard.css';

const RepoCard = ({ favorites, actions, item }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const result = favorites.some((favorite) => favorite.id === item.id);
    setIsFavorite(result);
  }, [favorites, item]);

  const handleToggleFavorites = (value) => {
    if (isFavorite) {
      actions.removeFromFavorites(value);
    } else {
      actions.addToFavorites(value);
    }
  };

  return (
    <section className='section section--detail'>
      <div className='detail-top d-flex'>
        <h2>{item.name}</h2>
        <FontAwesomeIcon
          icon={faHeart}
          color={isFavorite ? 'crimson' : 'gray'}
          onClick={() => handleToggleFavorites(item)}
        />
      </div>
      <p>{isFavorite ? 'YES' : 'NO'}</p>
      <Link className='detail-linkWrapper' to={`repo/${item.id}`}>
        <p>{item.description}</p>
        <div className='d-flex'>
          <p>
            <FontAwesomeIcon icon={faStar} color='gray' />{' '}
            {item.stargazers_count}
          </p>
          <p>
            <FontAwesomeIcon icon={faEye} color='gray' /> {item.watchers_count}
          </p>
        </div>
        <div className='section__footer'>
          <div className='d-flex'>
            <p>
              {item.html_url ? (
                <a href={item.html_url}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              ) : null}
            </p>
            <p>
              {item.homepage ? (
                <a href={item.homepage}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              ) : null}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToFavorites: bindActionCreators(
        favoriteActions.addRepositoryToFavorites,
        dispatch
      ),
      removeFromFavorites: bindActionCreators(
        favoriteActions.removeRepositoryFromFavorites,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoCard);
