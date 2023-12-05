import React from "react"
import {View, Text, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()

    return (
        <View>
            <Text>Name: {contact.name}</Text>
            <Text>Email: {contact.email}</Text>
            <Text>Phone: {contact.phone}</Text>
            <Text>fileName: {contact.fileName}</Text>
            <Button title="Back to Main" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ContactView
