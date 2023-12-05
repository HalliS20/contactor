import React from "react"
import {View, Text, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {removeContact} from "../../services/fileService"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()

    return (
        <View>
            <Text>Name: {contact.name}</Text>
            <Text>Phone: {contact.phone}</Text>
            <Text>fileName: {contact.fileName}</Text>
            <Text
                onPress={() => {
                    removeContact(contact.fileName)
                    navigation.goBack()
                }}
            >
                Delete me
            </Text>
            <Button
                title="Edit Contact"
                onPress={() => navigation.navigate("ContactForm", {contact})}
            />
            <Button title="Back to Main" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ContactView
