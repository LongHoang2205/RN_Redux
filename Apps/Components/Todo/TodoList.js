import Redux from 'react';
import { View } from 'react-native';

function TodoList({taskName,description}){
    return(
        <View>
            <Text>{taskName}</Text>
            <Text>{description}</Text>
        </View>
    )
}
export default TodoList;