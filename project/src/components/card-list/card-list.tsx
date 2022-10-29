import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type cardListProps = {
  cardCount: number;
  films: Film[];
}

export default function CardList({ cardCount, films }: cardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}
