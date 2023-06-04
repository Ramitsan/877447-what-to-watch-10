import { Review } from '../../types/review';

type CommentProps = {
  review: Review;
}

export default function Comment({review} : CommentProps): JSX.Element {
  const {comment, user, date, rating} = review;
  const reviewDate = new Date(date);
  const monthNumber = reviewDate.getMonth() + 1;
  const monthName = reviewDate.toLocaleString('en', {month: 'long'});
  const dayOfMonth = reviewDate.getDate();
  const year = reviewDate.getFullYear();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={`${year}-${monthNumber}-${dayOfMonth}`}>{`${monthName} ${dayOfMonth}, ${year}`}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
