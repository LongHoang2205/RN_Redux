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
      console.log("day la action remove:", action.payload.itemPicked.id);
      const removeId = action.payload.itemPicked.id;
      const removeMessageList = newMessage.filter((x) => {
        if (x.id !== removeId) {
          return {
            x,
          };
        }
      });
      return {
        addMessage: removeMessageList,
      };
    case EDIT_MESSAGE:
      console.log("day la action edit message:", action.payload);
      console.log("day la item message", action.payload.itemPicked);
      const messageIdEdit = action.payload.itemPicked.id;
      console.log("Day la id cua item", action.payload.itemPicked.id);
      //const userNameEdit = action.payload.itemPicked.username;
      const messageEdit = action.payload.messageContent;
      console.log("day la message:", action.payload.messageContent);

      // đoạn này làm đúng rồi không có gì sai cả
      // cái item lúc map cái mảng đó là đại diện cho mỗi item trong hàm
      // không phải là item picked nên không đặt tên itemPicked.
      const editMapList = newMessage.map((item) => {
        if (item.id === messageIdEdit) {
          return {
            // ...itemPicked => đoạn này phải sử a lại cả nội dung của itempicked mình truyền vào mới đúng
            // có thể hiểu là vì mình sửa item cũ => trong đoạn này thì lấy tất cả của thằng cũ,
            ////////// sửa lại id (không cần sửa lại id, nhưng không sai đoạn này vì truyền vào vẫn là id cũ), và message content
            ...action.payload.itemPicked,
            id: messageIdEdit,
            messageContent: messageEdit,
          };
        } else {
          return item;
        }
      });
      return {
        // messages: editMapList, => đoạn này sai vì khi mà đã tạo ra mảng mới
        //thì phải gán vào message.addMessage chớ không phải gán vào message
        addMessage: editMapList,
      };
    default:
      return messages;
  }
}
