import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFound from '../../pages/404-page/404-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyLIstPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/playerPage/playerPage';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/film';

type AppProps = {
  cardCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmDate: string;
  films: Film[];
}

export default function App({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate, films }: AppProps): JSX.Element {
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyLIstPage />
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
