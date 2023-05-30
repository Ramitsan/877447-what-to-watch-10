import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type FilmCardProps = {
  key: number;
  film: Film;
  onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
  onMouseLeave?: MouseEventHandler<HTMLElement> | undefined;
}

export default function FilmCard({ key, film, onMouseEnter, onMouseLeave }: FilmCardProps): JSX.Element {
  const [selected, setSelected] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState(false);
  const { previewImage, name, previewVideoLink } = film;
  const preview = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selected) {
      const id = setTimeout(() => {
        setIsPlay(true);
      }, 1000);
      return () => clearTimeout(id);
    } else {
      setIsPlay(false);
    }
  }, [selected]);

  useEffect(() => {
    if (isPlay) {
      preview.current?.play();
    }
  }, [isPlay]);

  return (
    <article style={{border: 'red'}} key={key} onMouseEnter={() => {
      setSelected(true);
    }} onMouseLeave={() => {
      setSelected(false);
    }} className="small-film-card catalog__films-card"
    >
      {isPlay && <video style={{ width: '100%', height: 'auto', top: '0', left: '0' }} src={previewVideoLink} ref={preview} onClick={() => { preview.current?.play(); }} muted></video>}
     
      {!isPlay &&
        <>
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link className="small-film-card__link" to={`/films/${film.id}/overview`}>{name}</Link>
          </h3>
        </>}
    </article>
  );
}
