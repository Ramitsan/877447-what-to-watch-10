import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre } from '../../store/actions';
import GenreItem from '../genre-item/genre-item';

type GenreListProps = {
  genres: string[];
}

export default function GenreList({ genres }: GenreListProps): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const handleSelectGenre = (genreTitle: string) => {
    dispatch(changeGenre({ genre: genreTitle }));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem
          key={genre}
          genre={genre}
          selectedGenre={selectedGenre}
          onSelectGenre={handleSelectGenre}
        />))}
    </ul>
  );
}
