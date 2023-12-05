import React, {useState} from "react"
import {View, Text, Button, Linking, Image} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {removeContact} from "../../services/fileService"
import {deviceWidth} from "../../styles/sizes"

function ContactView({route}) {
    const {contact} = route.params
    const navigation = useNavigation()
    const [imageSource, setImageSource] = useState(
        contact.image
            ? {uri: contact.image}
            : require("../../resources/default-avatar.png"),
    )

    const handleCall = () => {
        Linking.openURL(`tel:${contact.phone}`)
    }

    const handleError = () => {
        setImageSource(require("../../resources/default-avatar.png"))
    }

    return (
        <View>
            <Image
                style={{width: deviceWidth * 1, height: 100}}
                source={imageSource}
                onError={handleError}
                defaultSource={require("../../resources/default-avatar.png")}
            />
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
