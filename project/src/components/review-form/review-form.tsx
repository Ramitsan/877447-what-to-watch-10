import { ChangeEvent, useState } from 'react';

type IStarInputProps = {
  value: number;
  id: string;
  onChange: (value: number) => void;
  initialValue: number;
}

function StarInput({ value, id, onChange, initialValue }: IStarInputProps): JSX.Element {
  return (
    <>
      <input onChange={(e) => {
        if (e.target.checked) {
          onChange(value);
        }
      }}
      className="rating__input" id={id} type="radio" name="rating" value={value} checked={value === initialValue}
      />
      <label className="rating__label" htmlFor={id}>Rating {id}</label>
    </>
  );
}

type IStarInputsListProps = {
  onChange: (value: number) => void;
  initialValue: number;
}

function StarInputsList({ onChange, initialValue }: IStarInputsListProps): JSX.Element {
  const starsValues = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const stars = starsValues.map((value) => {
    const id = `star-${value}`;
    return (
      <StarInput key={`input${value}`} id={id} value={value} initialValue={initialValue} onChange={onChange} />
    );
  });
  
  return (
    <div className="rating__stars">
      {stars}
    </div>
  );
}

export default function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  // Функции для обновления состояния
  const handleStarChange = (value: number) => {
    setFormData((last) => ({ ...last, rating: value }));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((last) => ({ ...last, review: evt.target.value }));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <StarInputsList onChange={handleStarChange} initialValue={formData.rating} />
          {(() => '')()}
        </div>

        <div className="add-review__text">
          <textarea onChange={handleReviewChange} className="add-review__textarea" name="review-text" id="review-text" value={formData.review} placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
