import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Main from "../views/Main"
import ContactView from "../views/ContactView"
import ContactForm from "../views/ContactForm"
import {offWhite} from "../styles/colors"

const Stack = createStackNavigator()
/**
 * Nacigates between Views.
 *
 * @returns {JSX.Element} The Routes component.
 */
function Routes() {
    const screenOptions = {
        headerStyle: {
            backgroundColor: offWhite,
        },
        headerTitleStyle: {
            fontWeight: "bold",
        },
    }
    const stackOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Contactor"
                screenOptions={stackOptions}
            >
                <Stack.Screen
                    name="Contactor"
                    component={Main}
                    options={screenOptions}
                />
                <Stack.Screen
                    name="Contact"
                    component={ContactView}
                    options={screenOptions}
                />
                <Stack.Screen
                    name="Contact Form"
                    component={ContactForm}
                    options={screenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
