import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film';
import { AuthorizationStatus } from '../const';

// Список действий, на основании которых формируется новый state:
// изменение жанра, получение списка фильмов в соответствии с выбранным жанром,
// статус загрузки данных, статус авторизации
const changeGenre = createAction<{ genre: string }>('changeGenre');
const loadFilms = createAction<{ movies: FilmType[] }>('loadFilms');
const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export {changeGenre, loadFilms, setDataLoadedStatus, requireAuthorization};
