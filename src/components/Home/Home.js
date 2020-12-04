import React, { useState } from "react";
import MovieSearch from "../MovieSearch";
import SearchResults from "../SearchResults";
import "./home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleUpdate = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("onClick AHOY");
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    console.log(setMovies);
  };

  return (
    <div className="home-page">
      <div className="title">Monica's Movie Database!</div>
      <MovieSearch handleClick={handleClick} handleUpdate={handleUpdate} />
      <ul>
        <SearchResults movies={movies} />
      </ul>
    </div>
  );
};

export default Home;
