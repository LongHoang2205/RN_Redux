import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import UserReducer from "./UserReducer";
import MessageReducer from "./MessageReducer";

export default combineReducers({
  todo: TodoReducer,
  user: UserReducer,
  message: MessageReducer,
});
