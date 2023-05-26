import { Review } from '../../types/review';

type CommentProps = {
  review: Review;
}

export default function Comment({review} : CommentProps): JSX.Element {
  const {comment, user, date, rating} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2015-11-18">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
