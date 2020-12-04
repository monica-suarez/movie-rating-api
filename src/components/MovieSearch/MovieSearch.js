import React from "react";
import "./moviesearch.css";

const MovieSearch = (props, searchinput) => {
  return (
    <form className="search-form" onSubmit={props.handleClick}>
      <label className="search-input-label">Find a Movie:</label>
      <br />
      <br />
      <input
        className="search-input"
        onChange={props.handleUpdate}
        type="text"
        name="searchinput"
        placeholder="Enter A Movie Title"
        searchinput={searchinput}
      />
      <br />
      <br />
      <input className="submit-button" type="submit" value="Search" />
      <br />
      <br />
    </form>
  );
};

export default MovieSearch;
