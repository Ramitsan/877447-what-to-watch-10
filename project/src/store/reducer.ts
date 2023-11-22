import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
import { changeGenre, loadFilms, setDataLoadedStatus } from './actions';
import { FilmType } from '../types/film';

type InitialStateType = {
  genre: string,
  movies: FilmType[],
  isDataLoaded: boolean
}

// Объект начального состояния:
// жанр (используется для фильтров по жанру) и список фильмов
const initialState: InitialStateType = {
  genre: genres[0],
  movies: [],
  isDataLoaded: false
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
    });
});
