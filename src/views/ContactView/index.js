import React, {useState} from "react"
import {View, Text, Button, Linking, Image} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {removeContact} from "../../services/fileService"
import {deviceWidth} from "../../styles/sizes"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()
    const [imageFound, setImageFound] = useState(true)

    const handleCall = () => {
        Linking.openURL(`tel:${contact.phone}`)
    }

    return (
        <View>
            {contact.image && imageFound && (
                <Image
                    style={{width: deviceWidth * 1, height: 100}}
                    source={{uri: contact.image}}
                    onError={() => setImageFound(false)}
                />
            )}
            {console.log(contact.image)}
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
            <Button
                title="Edit Contact"
                onPress={() => navigation.navigate("ContactForm", {contact})}
            />
            <Button title="Back to Main" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ContactView
