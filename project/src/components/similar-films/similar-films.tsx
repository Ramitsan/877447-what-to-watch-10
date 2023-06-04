import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type SimilarFilmsProps = {
  id: number;
  films: Film[];
}

export default function SimilarFilms({id, films} : SimilarFilmsProps): JSX.Element {
  const similarFilmsCount = 4;

  const selectedFilm = films.find((film) => film.id === id);
  const similarFilms: Film[] = films.filter((film) =>
    (selectedFilm && film.genre === selectedFilm.genre)
  ).slice(0, similarFilmsCount);

  return (
    <div className="catalog__films-list">
      {similarFilms.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}
