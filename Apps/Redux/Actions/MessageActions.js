import { ADD_MESSAGE, EDIT_MESSAGE, REMOVE_MESSAGE } from "./type";

// messages
export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
});

export const editMessage = (payload) => ({
  type: EDIT_MESSAGE,
  payload,
});

export const removeMessage = (payload) => ({
  type: REMOVE_MESSAGE,
  payload,
});
