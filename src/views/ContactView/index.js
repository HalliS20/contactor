import React from "react"
import {View, Text, Button, Linking} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {removeContact} from "../../services/fileService"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()

    const handleCall = () => {
        Linking.openURL(`tel:${contact.phone}`)
    }

    return (
        <View>
            <Text>Name: {contact.name}</Text>
            <Text>Phone: {contact.phone}</Text>
            <Text>fileName: {contact.fileName}</Text>
            <Button title="Call" onPress={handleCall} />
            <Text
                onPress={() => {
                    removeContact(contact.fileName)
                    navigation.goBack()
                }}
            >
                Delete me
            </Text>
            <Button title="Back to Main" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ContactView
