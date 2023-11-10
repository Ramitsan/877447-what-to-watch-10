import { Link } from 'react-router-dom';

type GenreItemProps = {
  genre: string;
}

export default function GenreItem({genre}: GenreItemProps): JSX.Element {
  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <Link to="#" className="catalog__genres-link">{genre}</Link>
    </li>
  );
}
