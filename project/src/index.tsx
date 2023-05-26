import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';

const Setting = {
  CARDS_COUNT: 20,
};

const PromoFilmData = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardCount={Setting.CARDS_COUNT}
      promoFilmTitle={PromoFilmData.title}
      promoFilmGenre={PromoFilmData.genre}
      promoFilmDate={PromoFilmData.date}
      films={films}
    />
  </React.StrictMode>,
);
