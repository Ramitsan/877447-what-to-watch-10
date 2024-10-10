import { Link, useParams } from 'react-router-dom';
import TabOverview from '../../components/tab-overview/tab-overview';
import TabDetails from '../../components/tab-details/tab-details';
import TabReviews from '../../components/tab-reviews/tab-reviews';
import SimilarFilms from '../../components/similar-films/similar-films';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';

export default function MoviePage(): JSX.Element {
  const { id, tab } = useParams();
  const films = useAppSelector((state) => state.movies);
  const film = films.find((it) => it.id === Number(id));

  const tabRoutes = {
    overview: TabOverview,
    details: TabDetails,
    reviews: TabReviews
  };

  const tabTitles = Object.keys(tabRoutes);

  const TabComponent = tab !== undefined ? tabRoutes[tab as keyof typeof tabRoutes] : TabOverview;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={`${film?.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {tabTitles.map((item, index) => (
                    <li key={item} className={`film-nav__item ${tab === tabTitles[index] ? 'film-nav__item--active' : ''} `}>
                      <Link to={`/films/${id}/${tabTitles[index]}`} className="film-nav__link">{item[0].toUpperCase() + item.slice(1)}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <TabComponent film={film}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarFilms id={Number(id)} films={films} />
        </section>


        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
