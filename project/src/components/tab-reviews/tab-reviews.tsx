import CommentsList from '../comments-list/comments-list';
import { FilmType } from '../../types/film';
import { ReviewType } from '../../types/review';
import NotFound from '../../pages/404-page/404-page';
import { useEffect, useState } from 'react';
import { api } from '../../store';
import { useParams } from 'react-router-dom';

type TabReviewsProps = {
  film?: FilmType;
  comments?: ReviewType[];
}

export default function TabReviews({film, comments} : TabReviewsProps): JSX.Element {
  const [filmComments, setFilmComments] = useState<ReviewType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/comments/${id}`).then((response) =>{
      setFilmComments(response.data);
    });
  }, [id]);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <CommentsList reviews={filmComments}/>
    </div>
  );
}
