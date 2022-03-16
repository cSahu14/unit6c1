import { FILTER_BY_GENRE, GET_MOVIE_DATA } from "./actionTypes";

// thunk call to fetch movie list
export const getMovieData = (payload) => ({
  type: GET_MOVIE_DATA,
  payload,
});

// action object for filter  feature

export const filterByGenre = (payload) => ({
  type: FILTER_BY_GENRE,
  payload,
});
