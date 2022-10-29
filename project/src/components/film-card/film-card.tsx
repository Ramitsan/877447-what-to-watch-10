import { Link } from 'react-router-dom';
import {Film} from '../../types/film';

type FilmCardProps = {
  key: number;
  film: Film;
}

export default function FilmCard({key, film} : FilmCardProps): JSX.Element {
  return (
    <article key={key} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{film.name}</Link>
      </h3>
    </article>
  );
}
