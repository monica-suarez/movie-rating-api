import { React } from "react";
import { Link } from "react-router-dom";

const SearchResults = (props) => {
  return (
    <ul className="result-list">
      {props.movies.map((movie, index) => {
        console.log(movie.id);
        return (
          <li className="result-list-item" key={index}>
            <Link
              to={{
                pathname: `/movieDetails/${movie.id}`,
                state: { movieid: movie.id },
              }}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
