import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieData } from "../Redux/actions";
import "../App.css";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [list, setList] = useState([]);
  const movies = useSelector((store) => store.data);
  const dispatch = useDispatch();
  // to get all movies list on component mounts

  useEffect(() => {
    //   dispatch an action to the store

    getMovies();
  }, [dispatch]);

  const getMovies = () => {
    // let url = "https://movie-fake-server.herokuapp.com/data";
    axios.get("https://movie-fake-server.herokuapp.com/data").then((res) => {
      setList(res.data);
      dispatch(getMovieData(res.data));
    });
    // console.log(res.data);
  };

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
    // genres.filter(e === e.target.value);
    setList.filter(function (n) {
      return n === e;
    });
  };
  return (
    <div>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {/* map through the filter  */}
        {genres.map((e) => (
          <option value="">{e}</option>
        ))}
      </select>
      <div className="movies-list">
        {/* map throught th movie list and display the results */}
        {list.map((e, index) => {
          return (
            <div key={index}>
              <h1>movie id: {e.id}</h1>
              <h2>movie name : {e.movie_name}</h2>
              <img src={e.image_url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
