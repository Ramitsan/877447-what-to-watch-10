import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { genres } from './const';
import { fetchFilmsAction } from './store/api-actions';

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

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cardCount={Setting.CARDS_COUNT}
        promoFilmTitle={PromoFilmData.title}
        promoFilmGenre={PromoFilmData.genre}
        promoFilmDate={PromoFilmData.date}
        genres={genres}
      />
    </Provider>
  </React.StrictMode>,
);
