import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Screens
import LoginScreen from "../../Containers/LoginScreen/LoginScreen";
import Todo from '../../Containers/Todo'

// Auth stack
const AuthStack = createStackNavigator();
function AuthStacks() {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="LoginScreen"
        >
            <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
            <AuthStack.Screen name="Todo" component={Todo} />
        </AuthStack.Navigator>
    );
}

// Stack
// init stack will config the first screen when app open
const Stack = createStackNavigator();
function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"LoginScreen"} headerMode={"none"}>
                <Stack.Screen name={"AuthStack"} component={AuthStacks} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;