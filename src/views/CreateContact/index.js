import React from "react"
import { Text, View } from "react-native"
import Form from "../../components/Form"

const Main = ({ navigation: { navigate } }) => (
    <View>
        <Text>Create Contact</Text>
        <Form/>
    </View>
)

export default Main
