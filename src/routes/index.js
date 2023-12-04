import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Main from "../views/Main"
import CreateContact from "../views/CreateContact"

const Stack = createStackNavigator()

/** 
 * Routes
 * @return {NavigationContainer}*/
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Main"
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="CreateContact" component={CreateContact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
