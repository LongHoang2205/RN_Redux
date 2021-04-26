import { ADD_MESSAGE, EDIT_MESSAGE, REMOVE_MESSAGE } from "../Actions/type";

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
  const newMessage = messages.addMessage ? messages.addMessage : [];
  switch (action.type) {
    case ADD_MESSAGE:
      newMessage.push({
        id: messages.addMessage.length + 1,
        // username: "me",
        messageContent: action.payload.messageContent,
      });
      return {
        ...messages,
        addMessage: newMessage,
      };
    case REMOVE_MESSAGE:
      console.log("day la action remove:", action.payload);
      const removeId = action.payload.item.id;
      const removeMessageList = newMessage.filter((x) => {
        if (x.id !== removeId) {
          return x;
        }
      });
      return {
        messages: removeMessageList,
      };
    case EDIT_MESSAGE:
      console.log("day la action edit message:", action.payload);
      console.log("day la item message", action.payload.itemPicked);
      const messageIdEdit = action.payload.itemPicked.id;
      console.log("Day la id cua item", action.payload.itemPicked.id);
      //const userNameEdit = action.payload.itemPicked.username;
      const messageEdit = action.payload.messageContent;
      console.log("day la message:", action.payload.messageContent);
      const editMapList = newMessage.map((itemPicked) => {
        if (itemPicked.id === messageIdEdit) {
          return {
            ...itemPicked,
            id: messageIdEdit,
            // username: userNameEdit,
            messageContent: messageEdit,
          };
        } else {
          return itemPicked;
        }
      });
      console.log("edit message ne:", editMapList);
      return {
        messages: editMapList,
      };

    default:
      return messages;
  }
}
