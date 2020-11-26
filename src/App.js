import "./App.css";
import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import SearchResults from "./components/SearchResults";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleUpdate = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("HeyHey");
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    console.log(movies);
  };

  return (
    <div className="App">
      <h1>Search/Rate Movies</h1>
      <MovieSearch handleClick={handleClick} handleUpdate={handleUpdate} />
      <ul>
        <SearchResults movies={movies} />
      </ul>
    </div>
  );
}

export default App;
