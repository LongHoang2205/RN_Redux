import { ADD_MESSAGE, EDIT_MESSAGE } from "../Actions/type";

const initialState = {
  addMessage: [
    {
      id: 1,
      username: "you",
      messageContent: "Hello, co gi dui hong",
    },
    {
      id: 2,
      username: "me",
      messageContent: "Hello, hong co gi dui",
    },
    {
      id: 3,
      username: "you",
      messageContent: "eeee",
    },
    {
      id: 4,
      username: "you",
      messageContent: "an com chua",
    },
    {
      id: 5,
      username: "me",
      messageContent: "roi ak",
    },
  ],
};

export default function (messages = initialState, action) {
  const newMessage = messages.addMessage;
  switch (action.type) {
    case ADD_MESSAGE:
      newMessage.push({
        id: messages.addMessage.length + 1,
        username: "me",
        messageContent: action.payload.messageContent,
      });
      return {
        ...messages,
        addMessage: newMessage,
      };
    case EDIT_MESSAGE:
      console.log("type", action.payload);
      const messageIdEdit = action.payload.messageData;
      //const userNameEdit = action.payload.username;
      const messageEdit = action.payload.messageContent;
      const editMessageList = newMessage.map((item) => {
        if (item.id === messageIdEdit) {
          return {
            ...item,
            messageContent: messageEdit,
          };
        } else {
          return item;
        }
      });
      return {
        messages: editMessageList,
      };
    default:
      return messages;
  }
}
