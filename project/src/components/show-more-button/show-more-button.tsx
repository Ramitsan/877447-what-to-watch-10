type ShowMoreButtonProps = {
  onShowMore: () => void;
}


export default function ShowMoreButton({onShowMore}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMore}>Show more
      </button>
    </div>
  );
}
