import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div>
      {favorites.length > 0 ? (
        <div className='favorites'>
          <h1 className="header__title">Favorites List</h1>
          <section className="section section--favorites">
            <ul className='favorites__list'>
            {favorites.map((favorite) => (
              <li key={favorite.id} className='favorites__item'>
                <Link to={`repo/${favorite.id}`} className='favorites__link'>
                  {favorite.name}
                </Link>
              </li>
            ))}
          </ul>
          </section>
        </div>
      ) : (
        <h1>You haven't added any repository to the favorites list.</h1>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps)(Favorites);
