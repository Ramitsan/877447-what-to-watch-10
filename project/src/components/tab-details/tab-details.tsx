import NotFound from '../../pages/404-page/404-page';
import { FilmType } from '../../types/film';

type TabDetailsProps = {
  film?: FilmType;
}

export default function TabDetails({film} : TabDetailsProps): JSX.Element {
  if (!film) {
    return (
      <NotFound />
    );
  }

  const {director, starring, runTime, genre, released} = film;
  const actors = starring.map((it, index) => index === starring.length - 1 ? `${it}` : <>{`${it}, `}<br /></>);
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  const filmDuration = hours >= 1 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {actors}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{filmDuration}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}
