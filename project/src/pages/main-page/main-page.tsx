import { Link } from 'react-router-dom';
import FilmCard from '../../components/film-card/film-card';

type mainPageProps = {
  cardCount: number;
  promoFilmTitle: string,
  promoFilmGenre: string,
  promoFilmDate: string
}
type cardContainerProps = {
  cardCount: number;
}

function CardContainer({ cardCount }: cardContainerProps): JSX.Element {
  const cards: Array<JSX.Element> = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(<FilmCard />);
  }
  return (
    <div className="catalog__films-list">
      {cards}
    </div>
  );
}

export default function MainPage({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate }: mainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link to="#" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/#" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmDate}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link to="#" className="catalog__genres-link">All genres</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Comedies</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Crime</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Documentary</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Dramas</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Horror</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Kids & Family</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Romance</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Sci-Fi</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">Thrillers</Link>
            </li>
          </ul>
          <CardContainer cardCount={cardCount} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="#" className="logo__link logo__link--light">
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
