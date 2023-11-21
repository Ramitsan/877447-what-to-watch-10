import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film';

//Список действий, на основании которых формируется новый state:
// изменение жанра и получение списка фильмов в соответствии с выбранным жанром
const changeGenre = createAction<{ genre: string }>('changeGenre');
const loadFilms = createAction<{ movies: FilmType[] }>('loadFilms');
const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export {changeGenre, loadFilms, setDataLoadedStatus};
