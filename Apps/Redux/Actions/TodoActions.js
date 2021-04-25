import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./type";

// todo
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});
