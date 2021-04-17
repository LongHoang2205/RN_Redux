import { ADD_TODO } from "./type";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
