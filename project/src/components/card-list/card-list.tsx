import { useState } from 'react';
import { FilmType } from '../../types/film';
import FilmCard from '../film-card/film-card';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks';

type cardListProps = {
  cardCount: number;
  films: FilmType[];
}

export default function CardList({ cardCount, films }: cardListProps): JSX.Element {
  const [selected, setSelected] = useState<null | number>(null);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  return (
    <div className="catalog__films-list">
      {!isDataLoaded && <Spinner/>}
      {films.map((film, index) => (
        <FilmCard key={film.id} film={film}
          onMouseEnter={() => {
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
