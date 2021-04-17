import { ADD_TODO } from "../Actions/type";

export default function (tasks = [], action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTask = tasks.tasks ? tasks.tasks : [];
      newTask.push({
        taskName: action.payload.taskName,
        description: action.payload.description,
      });
      return {
        tasks: newTask,
      };
    default:
      return tasks;
  }
}
