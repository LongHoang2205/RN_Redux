import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../Actions/type";

const initialState = {
  tasks: [],
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
      const removeId = action.payload.item.id;
      const removeTodoList = newTask.filter((x) => {
        if (x.id !== removeId) {
          return x;
        }
      });
      return {
        tasks: removeTodoList,
      };
    case EDIT_TODO:
      const itemIdEdit = action.payload.item.id;
      const taskNameEdit = action.payload.taskName;
      const descriptionEdit = action.payload.description;
      const editMapList = newTask.map((item) => {
        if (item.id === itemIdEdit) {
          return {
            ...item,
            taskName: taskNameEdit,
            description: descriptionEdit,
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
