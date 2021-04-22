import { ADD_TODO, REMOVE_TODO, EDIT_TODO, USER } from "./type";

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

export const user = (payload) => ({
  type: USER,
  payload,
});
