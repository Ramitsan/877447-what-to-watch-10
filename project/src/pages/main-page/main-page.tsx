import { Link } from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import { FilmType } from '../../types/film';
import GenreList from '../../components/genre-list/genre-list';
import { genreNames } from '../../const';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useEffect, useState } from 'react';
import Header from '../../components/header/header';

type MainPageProps = {
  cardCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmDate: string;
  films: FilmType[];
  genres: string[];
  genre: string;
}

export default function MainPage({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate, films, genres, genre }: MainPageProps): JSX.Element {
  const [filmsByGenre, setFilmsByGenre] = useState<Array<FilmType>>([]);
  const [renderedCardsCount, setRenderedCardsCount] = useState(0);

  const cardCountPerStep = 8;
  useEffect(() => {
    const filteredFilms = genre === 'All genres' ?
      films.map((film) => film) :
      films.filter((film) => film.genre === genreNames[genre]);

    setFilmsByGenre(filteredFilms);
    setRenderedCardsCount(cardCountPerStep);
  }, [genre, films]);

  const filmsByGenreCount = filmsByGenre.length;
  const renderedCards = filmsByGenre.slice(0, Math.min(filmsByGenreCount, renderedCardsCount));

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        
        <Header />

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
          <GenreList genres={genres} />
          <CardList cardCount={cardCount} films={renderedCards} />
          {filmsByGenreCount > renderedCards.length ?
            <ShowMoreButton onShowMore={() => {
              setRenderedCardsCount((last) => last + cardCountPerStep);
            }}
            />
            : ''}
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
