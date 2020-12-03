import React from "react";
import "./moviesearch.css";

const MovieSearch = (props, searchinput) => {
  return (
    <form onSubmit={props.handleClick}>
      <label id="searchinput">Find a Movie:</label>
      <br />
      <br />
      <input
        onChange={props.handleUpdate}
        type="text"
        name="searchinput"
        placeholder="Enter A Movie Title"
        searchinput={searchinput}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <br />
    </form>
  );
};

export default MovieSearch;
