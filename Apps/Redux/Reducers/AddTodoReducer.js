import {ADD_TODO} from '../Actions/type';

// const initialState = {
//     id:0,
//     taskName: "",
//     description: "",
// }
export default function (tasks=[],action) {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            // const taskName = action.data.taskName
            // console.log("123213123", taskName);
            // const description = action.data.description
            return {
                ...tasks,
                taskName:action.taskName,
                description:action.description
            };
            default:
                return tasks;
    }
}