import React, {useState} from "react"
import {View, TextInput, Button} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {addContact} from "../../services/fileService"

function ContactForm() {
    const [person, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [number, setPhone] = useState("")
    const navigation = useNavigation()

    const handleSubmit = () => {
        // handle the form submission here
        const contact = {name: person, image: photo, phone: number}
        addContact(contact)
            .then(() => {
                console.log("Contact added successfully")
            })
            .catch((error) => {
                console.error("Failed to add contact:", error)
            })
        console.log(person, photo, number)
        navigation.goBack()
    }

    return (
        <View>
            <TextInput
                placeholder="Name"
                value={person}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Photo"
                value={photo}
                onChangeText={setPhoto}
            />
            <TextInput
                placeholder="Phone"
                value={number}
                onChangeText={setPhone}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}

export default ContactForm
