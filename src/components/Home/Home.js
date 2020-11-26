import { React, useState } from "react";
import MovieSearch from "../MovieSearch";
import SearchResults from "../SearchResults";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleUpdate = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Something happened");
    const API_KEY = "9d0e75c6e81c0b4c9295c1c5ab4c5af1";
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
    <div>
      <h1>Search/Rate Movies</h1>
      <MovieSearch handleClick={handleClick} handleUpdate={handleUpdate} />
      <ul>
        <SearchResults movies={movies} />
      </ul>
    </div>
  );
};

export default Home;
