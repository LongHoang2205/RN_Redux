import { MESSAGE } from "../Actions/type";

const initialState = {
  usr: {
    userName: "Hoang Vu Long",
    email: "hoangvulong2205@gmail.com",
    phone: "0123456789",
    gender: "Male",
    birthday: "01-01-2021",
  },
};

export default function (users = initialState, action) {
  switch (action.type) {
    case MESSAGE:
      const userDataEdit = action.payload.editUserData;
      const userEdited = {
        ...users.user,
        userName: userDataEdit.userNameInput,
        email: userDataEdit.userEmail,
        phone: userDataEdit.userPhone,
        gender: userDataEdit.userGender,
        birthday: userDataEdit.userDoB,
      };
      return {
        ...users,
        user: userEdited,
      };
    default:
      return users;
  }
}
