import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: "",
    };
  }
  componentDidMount() {
    const API_KEY = process.env.API_KEY;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}=`);
    console.log(API_KEY);
  }
  render() {
    return <h1>Movie APP</h1>;
  }
}

export default App;
