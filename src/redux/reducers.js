import { combineReducers } from "redux";
import increment from "./increment/reducer";
import posts from "./posts/reducer";

const reducers = combineReducers({
  increment,
  posts,
});

export default reducers;
