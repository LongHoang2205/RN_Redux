// /**
//  * @format
//  */

//  import { AppRegistry } from 'react-native';
//  import index from './Apps/index';
//  import { name as appName } from './app.json';
 
//  AppRegistry.registerComponent(appName, () => index);
 


import React from 'react';
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import AddTodoScreen from "./Apps/Containers/AddTodo/AddTodoScreen"


import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Redux
import { Provider } from 'react-redux';
import store from './Apps/Redux/Store/store';


import Todo from './Apps/Containers/Todo';

const Tab = createMaterialTopTabNavigator();


// Auth stack
const AuthStack = createStackNavigator();
function AuthStacks() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Todo"
        >
            <AuthStack.Screen name="Todo" component={Todo} />
            <AuthStack.Screen name="AddTodoScreen" component={AddTodoScreen} />
        </AuthStack.Navigator>
    );
}

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
         <NavigationContainer>
            <Stack.Navigator initialRouteName={"Todo"} headerMode={"none"}>
                <Stack.Screen name={"AuthStack"} component={AuthStacks} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
   
  );
}

export default App;