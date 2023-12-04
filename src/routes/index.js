import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Main from "../views/Main"
import CreateContact from "../views/CreateContact"

const Stack = createStackNavigator()
/**
 * Nacigates between Views.
 *
 * @returns {JSX.Element} The Routes component.
 */
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="CreateContact" component={CreateContact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
