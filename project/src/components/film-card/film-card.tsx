import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import {Film} from '../../types/film';

type FilmCardProps = {
  key: number;
  film: Film;
  onMouseOver?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

export default function FilmCard({key, film, onMouseOver, onMouseLeave} : FilmCardProps): JSX.Element {
  const {previewImage, name} = film;
  return (
    <article key={key} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}/overview`}>{name}</Link>
      </h3>
    </article>
  );
}
