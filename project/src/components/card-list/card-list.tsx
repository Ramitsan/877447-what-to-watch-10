import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type cardListProps = {
  cardCount: number;
  films: Film[];
}

export default function CardList({ cardCount, films }: cardListProps): JSX.Element {
  const [selected, setSelected] = useState<null | number>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film, index) => (
        <FilmCard key={film.id} film={film}
          onMouseOver={() => {
            if (selected !== index) {
              setSelected(index);
            }
          }}
          onMouseLeave={() => {
            setSelected(null);
          }}
        />
      ))}
    </div>
  );
}
