import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFound from '../../pages/404-page/404-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/playerPage';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import { FilmType } from '../../types/film';
import { useAppSelector } from '../../hooks/index';

type AppProps = {
  cardCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmDate: string;
  films: FilmType[];
  genres: string[];
}

export default function App({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate, films, genres }: AppProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage cardCount={cardCount}
              promoFilmTitle={promoFilmTitle}
              promoFilmGenre={promoFilmGenre}
              promoFilmDate={promoFilmDate}
              films={films}
              genres={genres}
              genre={genre}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage cardsCount={cardCount} films={films} />
            </ PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
