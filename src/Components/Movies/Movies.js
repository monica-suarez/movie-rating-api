import React from "react";

const Movies = (props) => {
  return (
    <li className="movie">
      <h3>{props.movies.name}</h3>
    </li>
  );
};

export default Movies;
