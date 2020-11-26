import React from "react";

const SearchResults = (props) => {
  return (
    <ul className="result-list">
      {props.movies.map((movie, index) => {
        return (
          <li className="result-list-item" key={index}>
            {movie.title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
