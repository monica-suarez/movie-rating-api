import React, { useState, useEffect } from "react";
import "./moviedetails.css";
import MovieReel from "./film-strip.jpg";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [director, setDirector] = useState([]);
  const movie_id = props.match.params.id;
  console.log(movie_id);
  const originalTitle = props.location.movieProp.original_title;
  const movieOverview = props.location.movieProp.overview;
  console.log(movieOverview);
  const releaseDate = props.location.movieProp.release_date;
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
    <div className="movie-details" moviedetails={movieDetails}>
      <aside>
        <img src={MovieReel} className="movie-reel" alt="movie-reel" />
      </aside>
      <body>
        <div className="details-list">
          <p className="movie-title" name="title">
            {originalTitle}
          </p>
          <div className="details">
            <label for="movie-overview">Movie Overview:</label>
            <p name="movie-overview">{movieOverview}</p>
          </div>
          <div className="details">
            <label for="director">Directed By:</label>
            <p name="director">{director}</p>
          </div>
          <div className="details">
            <label for="release-date">Release Date:</label>
            <p name="release-date">{releaseDate}</p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default MovieDetails;
