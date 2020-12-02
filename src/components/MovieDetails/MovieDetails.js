import React, { useState, useEffect } from "react";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  //   const moviePoster = props.match.params.poster_path;
  //   const originalTitle = props.match.params.original_title;
  //   const movieOverview = props.match.params.movieOverview;
  //   const releaseDate = props.match.params.release_date

  useEffect(() => (API_KEY, movie_id) => {
    API_KEY = process.env.REACT_APP_API_KEY;
    movie_id = props.match.params.id;
    console.log(movie_id);
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data.results);
      });
    console.log(setMovieDetails);
  });
  //   const movie_id = props.match.params.id;
  //   console.log(movie_id);
  return (
    <div moviedetails={movieDetails}>
      <p>Losing It</p>
    </div>
  );
};

export default MovieDetails;
