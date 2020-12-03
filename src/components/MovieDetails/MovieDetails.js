import React, { useState, useEffect } from "react";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [director, setDirector] = useState([]);
  const movie_id = props.match.params.id;
  console.log(movie_id);
  console.log(props.location.movieProp.original_title);
  //   const moviePoster = props.match.params.poster_path;
  const originalTitle = props.location.movieProp.original_title;
  //   const movieOverview = props.match.params.movieOverview;
  //   const releaseDate = props.match.params.release_date
  const getDetails = async () => {
    try {
      const movie_id = props.match.params.id;
      console.log(movie_id);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      console.log(data.crew);
      setMovieDetails(data);
      const directorName = data.crew.filter((crewmember) => {
        return crewmember.job === "Director";
      });
      setDirector(directorName[0].name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  //   const movie_id = props.match.params.id;
  //   console.log(movie_id);
  return (
    <div moviedetails={movieDetails}>
      <p>{originalTitle}</p>
      <p>{movie_id}</p>
      <p>{director}</p>
    </div>
  );
};

export default MovieDetails;
