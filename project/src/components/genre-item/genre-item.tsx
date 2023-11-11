import { Link } from 'react-router-dom';

type GenreItemProps = {
  genre: string;
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

export default function GenreItem({genre, selectedGenre, onSelectGenre}: GenreItemProps): JSX.Element {
  const isSelected = selectedGenre === genre ? 'catalog__genres-item--active' : '';
  return (
    <li className={`catalog__genres-item ${isSelected}`} onClick={() => onSelectGenre(genre)}>
      <Link to="#" className="catalog__genres-link">{genre}</Link>
    </li>
  );
}
