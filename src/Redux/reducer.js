import { GET_MOVIE_DATA } from "./actionTypes";

const initState = {
  data: [],
  filterData: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (store = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case GET_MOVIE_DATA:
      return { data: [payload] };
    default:
      return { ...store };
  }
};
