import React, {useState} from "react"
import {View, TextInput, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact} from "../../services/fileService"

function ContactForm() {
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [phone, setPhone] = useState("")
    const navigation = useNavigation()

    const handleSubmit = () => {
        // handle the form submission here
        const contact = {name, email, phone}
        addContact(name, contact)
            .then(() => {
                console.log("Contact added successfully")
                navigation.goBack()
            })
            .catch((error) => {
                console.error("Failed to add contact:", error)
            })
        console.log(name, email, phone)
        navigation.goBack()
    }

    return (
        <View>
            <TextInput placeholder="Name" value={name} onChangeText={setName} />
            <TextInput
                placeholder="Photo"
                value={photo}
                onChangeText={setPhoto}
            />
            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

export default ContactForm
