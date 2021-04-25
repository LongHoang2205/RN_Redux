import { MESSAGE } from "./type";

// users
export const message = (payload) => ({
  type: MESSAGE,
  payload,
});
