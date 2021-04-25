import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Redux
import { Provider } from "react-redux";
import store from "./Apps/Redux/Store/store";

// Screen
import HomeTodoScreen from "./Apps/Containers/HomeTodoScreen";
import AddTodoScreen from "./Apps/Containers/AddTodoScreen/AddTodoScreen";
import UserScreen from "./Apps/Containers/UserScreen/UserScreen";
import MessageScreen from "./Apps/Containers/MessageScreen/MessageScreen";

const Tab = createMaterialTopTabNavigator();

// Auth stack
const HomeStack = createStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTodoScreen"
    >
      <HomeStack.Screen name="HomeTodoScreen" component={HomeTodoScreen} />
      <HomeStack.Screen name="AddTodoScreen" component={AddTodoScreen} />
      <HomeStack.Screen name="UserScreen" component={UserScreen} />
      <HomeStack.Screen name="MessageScreen" component={MessageScreen} />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"HomeTodoScreen"}
          headerMode={"none"}
        >
          <Stack.Screen name={"HomeStack"} component={HomeStacks} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
