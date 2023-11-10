import GenreItem from '../genre-item/genre-item';

type GenreListProps = {
  genres: string[];
}

export default function GenreList({genres}: GenreListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => <GenreItem key={genre} genre={genre}/>)}
    </ul>
  );
}
