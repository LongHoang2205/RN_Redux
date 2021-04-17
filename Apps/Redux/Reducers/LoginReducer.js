import {LOGIN} from '../Actions/type';

const initialState = {
    id:0,
    taskName: "",
    description: "",
}
export default function (state=initialState,action) {
    console.log(action);
    switch (action.type) {
        case LOGIN:
            // const taskName = action.data.taskName
            // console.log("123213123", taskName);
            // const description = action.data.description
            return {
                ...state,
                id:action.data.id,
                taskName:action.data.taskName,
                description:action.data.description
            };
            default:
                return state;
    }
}