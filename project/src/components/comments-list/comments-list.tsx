import { ReviewType } from '../../types/review';
import Comment from '../comment/comment';

type CommentsListProps = {
  reviews: ReviewType[];
}

export default function CommentsList({ reviews }: CommentsListProps): JSX.Element {
  const reviewsPart1 = reviews.slice(0, reviews.length / 2);
  const reviewsPart2 = reviews.slice(reviews.length / 2);

  return (
    <>
      <div className="film-card__reviews-col">
        {reviewsPart1.map((review) => <Comment key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviewsPart2.map((review) => <Comment key={review.id} review={review} />)}
      </div>
    </>
  );
}
