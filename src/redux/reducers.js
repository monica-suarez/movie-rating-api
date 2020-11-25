import { combineReducers } from "redux";

const movies = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ movies });
