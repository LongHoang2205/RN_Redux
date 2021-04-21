import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../Actions/type";

const initialState = {
  tasks: [
    {
      id: 1,
      taskName: "init task",
      description: "new init task",
    },
    {
      id: 2,
      taskName: "task 2 quet nha",
      description: "ko quet nha, ma ve danh chet",
    },
  ],
};

export default function (tasks = initialState, action) {
  // new task nay bang voi task init
  const newTask = tasks.tasks ? tasks.tasks : [];
  switch (action.type) {
    case ADD_TODO:
      newTask.push({
        // id se bang do dai cua mang + 1 (se khong bh trung nhau)
        id: tasks.tasks.length + 1,
        taskName: action.payload.taskName + (tasks.tasks.length + 1),
        description: action.payload.description,
      });
      return {
        tasks: newTask,
      };
    case REMOVE_TODO:
      const itemIdRemove = action.payload.item.id;
      const removeFilterList = newTask.filter((x) => {
        if (x.id !== itemIdRemove) {
          return x;
        }
      });
      return {
        tasks: removeFilterList,
      };
    case EDIT_TODO:
      const itemIdEdit = action.payload.item.id;
      const titleEdit = action.payload.taskName;
      const editMapList = newTask.map((item) => {
        if (item.id === itemIdEdit) {
          return {
            ...item,
            taskName: titleEdit,
          };
        } else {
          return item;
        }
      });
      return {
        tasks: editMapList,
      };
    default:
      return tasks;
  }
}
