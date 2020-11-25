import React from "./node_modules/react";

const Movies = (props) => {
  return (
    <li className="movie">
      <h3>{props.movies.name}</h3>
    </li>
  );
};

export default Movies;
