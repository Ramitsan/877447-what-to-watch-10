import CommentsList from '../comments-list/comments-list';
import {reviews} from '../../mocks/reviews';

export default function TabReviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <CommentsList reviews={reviews}/>
    </div>
  );
}
