import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Main from "../views/Main"
import ContactView from "../views/ContactView"
import ContactForm from "../views/ContactForm"

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
                <Stack.Screen name="ContactView" component={ContactView} />
                <Stack.Screen name="ContactForm" component={ContactForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
