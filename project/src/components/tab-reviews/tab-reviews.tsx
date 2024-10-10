import CommentsList from '../comments-list/comments-list';
import { FilmType } from '../../types/film';
import { ReviewType } from '../../types/review';
import NotFound from '../../pages/404-page/404-page';
import { useEffect, useState } from 'react';
import { api } from '../../store';
import { useParams } from 'react-router-dom';

type TabReviewsProps = {
  film?: FilmType;
}

export default function TabReviews({film} : TabReviewsProps): JSX.Element {
  const [filmComments, setFilmComments] = useState<ReviewType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.get(`/comments/${id}`).then((response) =>{
      setFilmComments(response.data);
      setIsLoading(false);
    });
  }, [id]);

  if (!film) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      {isLoading && 'Loading'}
      {(!isLoading && filmComments.length) ? <CommentsList reviews={filmComments}/> : ''}
      {(!isLoading && !filmComments.length) ? 'No comments' : ''}
    </div>
  );
}
