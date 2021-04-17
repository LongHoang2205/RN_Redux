import { combineReducers } from "redux";
import AddTodoReducer from "./TodoReducer";

export default combineReducers({
  todo: AddTodoReducer,
});
