import React, { useState, useEffect } from "react";
import "./moviedetails.css";
import MovieReel from "./film-strip.jpg";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [director, setDirector] = useState([]);
  const initialThumbUpCount = () =>
    Number(window.localStorage.getItem("thumbsUp") || 0);
  const [thumbsUp, setThumbsUp] = useState(initialThumbUpCount);
  const initialThumbDownCount = () =>
    Number(window.localStorage.getItem("thumbsDown") || 0);
  const [thumbsDown, setThumbsDown] = useState(initialThumbDownCount);

  const movie_id = props.match.params.id;
  console.log(movie_id);
  // const movie_index = props.location.indexProp;
  // console.log(movie_index);
  const originalTitle = props.location.movieProp.original_title;
  const movieOverview = props.location.movieProp.overview;
  console.log(movieOverview);
  const releaseDate = props.location.movieProp.release_date;

  const getDetails = async () => {
    try {
      const movie_id = props.match.params.id;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.getItem("thumbsUp", thumbsUp);
  });

  useEffect(() => {
    window.localStorage.getItem("thumbsDown", thumbsDown);
  });

  useEffect(() => {
    window.localStorage.setItem("thumbsUp", thumbsUp);
  });

  useEffect(() => () => {
    window.localStorage.setItem("thumbsDown", thumbsDown);
  });

  const thumbsUpCounter = () => {
    setThumbsUp((prevUpCount) => prevUpCount + 1);
  };

  const thumbsDownCounter = () => {
    setThumbsDown((prevDownCount) => prevDownCount + 1);
  };

  return (
    <div
      className="movie-details"
      moviedetails={movieDetails}
      // index={movie_index}
    >
      <aside>
        <img src={MovieReel} className="movie-reel" alt="movie-reel" />
      </aside>
      <main className="detail-body">
        <div className="details-list">
          <p className="movie-title" name="title">
            {originalTitle}
          </p>
          <div className="details">
            <label className="label">Movie Overview:</label>
            <p name="movie-overview">{movieOverview}</p>
          </div>
          <div className="details">
            <label className="label">Directed By:</label>
            <p name="director">{director}</p>
          </div>
          <div className="details">
            <label className="label">Release Date:</label>
            <p name="release-date">{releaseDate}</p>
          </div>
        </div>
        <div className="thumb-counter">
          <div className="counter-title">Like/Dislike this Film?</div>
          <div className="the-thumbs">
            <div className="counter-area">
              <ThumbUpIcon onClick={thumbsUpCounter} />
              <p>{thumbsUp}</p>
            </div>
            <div className="counter-area">
              <ThumbDownAltIcon onClick={thumbsDownCounter} />
              <p>{thumbsDown}</p>
            </div>
          </div>
          <div className="link-home">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Find Another Movie
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
