import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import NotFound from '../../pages/404-page/404-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/playerPage';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';

type AppProps = {
  cardCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmDate: string;
  genres: string[];
}

export default function App({ cardCount, promoFilmTitle, promoFilmGenre, promoFilmDate, genres }: AppProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.movies);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // checkAuthAction - действие для проверки наличия авторизации
    dispatch(checkAuthAction());
  }, [dispatch]);

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
            <PrivateRoute authorizationStatus={authStatus}>
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
