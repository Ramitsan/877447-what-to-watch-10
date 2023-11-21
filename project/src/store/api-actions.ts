import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { FilmType } from '../types/film';
import { APIRoute } from '../const';
import {loadFilms} from './actions';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadFilms', async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(loadFilms({movies: data}));
  }
);
