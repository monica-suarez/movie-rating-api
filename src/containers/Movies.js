import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions";
import Movies from "../components/Movies";

const mapStateToProps = (state) => {
  return {
    movies: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
