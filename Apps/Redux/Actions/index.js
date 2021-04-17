import {LOGIN} from './type';
export const login=({id,taskName,description})=>({
    type:LOGIN,
    data:{id,taskName,description}
})