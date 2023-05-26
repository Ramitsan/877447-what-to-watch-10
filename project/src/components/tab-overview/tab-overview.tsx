import NotFound from '../../pages/404-page/404-page';
import { Film } from '../../types/film';

type TabOverviewProps = {
  film?: Film;
}

export default function TabOverview({ film }: TabOverviewProps): JSX.Element {
  if (!film) {
    return (
      <NotFound />
    );
  }
  const { rating, description, director, starring } = film;
  const actors = starring.map((it, index) => index === starring.length - 1 ? `${it} ` : `${it}, `);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actors} and other</strong></p>
      </div>
    </>
  );
}
