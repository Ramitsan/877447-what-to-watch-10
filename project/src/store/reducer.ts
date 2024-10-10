import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, genres } from '../const';
import { changeGenre, loadFilms, requireAuthorization, setDataLoadedStatus } from './actions';
import { FilmType } from '../types/film';
import { ReviewType } from '../types/review';

type InitialStateType = {
  genre: string,
  movies: FilmType[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  comments: ReviewType[]
}

// Объект начального состояния:
// жанр (используется для фильтров по жанру),
// список фильмов, загрузка данных, статус авторизации, список комментариев к фильму
const initialState: InitialStateType = {
  genre: genres[0],
  movies: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: []
};

//Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(loadFilms, (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
