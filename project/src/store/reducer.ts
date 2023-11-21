import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
// import { films } from '../mocks/films';
import { changeGenre, loadFilms } from './actions';
import { FilmType } from '../types/film';

type InitialStateType = {
  genre: string,
  movies: FilmType[]
}

// Объект начального состояния:
// жанр (используется для фильтров по жанру) и список фильмов
const initialState: InitialStateType = {
  genre: genres[0],
  // movies: films
  movies: []
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
    });
});
