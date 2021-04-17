import {ADD_TODO} from './type';
export const addTodo=({taskName,description})=>({
    type:ADD_TODO,
    // data:{id,taskName,description}
    taskName:taskName,
    description:description
})