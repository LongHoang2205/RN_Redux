import { ADD_MESSAGE, EDIT_MESSAGE } from "./type";

// messages
export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
});

export const editMessage = (payload) => ({
  type: EDIT_MESSAGE,
  payload,
});
