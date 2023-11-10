import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';
import { changeGenre, loadFilms } from './action';

// Объект начального состояния:
// жанр (используется для фильтров по жанру) и список фильмов
const initialState = {
  genre: DEFAULT_GENRE,
  movies: films
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
